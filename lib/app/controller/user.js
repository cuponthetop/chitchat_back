"use strict";

import { default as userModel } from '../model/user';
import { respondError, respondSuccess } from '../util/response';
import { codes } from '../util/status';
import B from 'bluebird';
import { logger } from '../util/logger';

function isAdmin(req) {
  return req.info.user.admin;
}

function isOwner(req) {
  let ownerId = null;

  if (req.params !== undefined &&
    req.params.uid !== undefined) {
    ownerId = req.params.uid;
  } else if (req.query !== undefined &&
    req.query.uid !== undefined) {
    ownerId = req.query.uid;
  }

  return req.info.user._id.toString() === ownerId;
}

async function sanitizeObjectId(proposedId) {
  try {
    let objID = new ObjectId(proposedId);
    return proposedId === objID.toString();

  } catch (e) {
    return false;
  }
}

async function loadUserOnRequest(req, res, param) {
  try {
    let user = userModel.findOne(param).exec();

    if (null === user) {
      return codes.UserNotFound.code;
    } else {
      req.info = req.info || {};
      req.info.user = user;
      return null;
    }
  } catch (e) {
    logger.error(e.message);
    return codes.UserNotFound.code;
  }
}


class UserCtrl {
  constructor() {

  }

  async createUser(req, res) {
    try {
      let nickname = req.body.nickname;
      if (nickname === '') {
        // default nickname
        nickname = 'chitchatter';
      }

      let newUser = new userModel({
        fbid: req.body.fbid,
        nickname: req.body.nickname,
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        admin: false,
        token: req.body.token,
      });

      let user = await userModel.findOne({ fbid: newUser.fbid }).exec();

      if (null === user) {
        let savedUser = await newUser.save();

        respondSuccess(req, res, savedUser.token);
      } else {
        respondError(req, res, codes.UserEmailAlreadyInUse.code);
      }
    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.UnknownError.code);
    }
  }

  async deleteUser(req, res) {
    try {
      let deletedUser = await userModel.findOneAndRemove({ _id: req.params.uid }).exec();

      if (deletedUser === null) {
        respondError(req, res, codes.UserNotFound.code);
      } else {
        respondSuccess(req, res, deletedUser);
      }
    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.UserRemovalFailed.code);
    }
  }

  async getUser(req, res) {
    try {
      let user = await userModel.findOne({ _id: req.params.uid }).exec();

      if (user === null) {
        respondError(req, res, codes.UserNotFound.code);
      } else {
        respondSuccess(req, res, user);
      }
    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.UserNotFound.code);
    }
  }

  async getUserIDWithParams(req, res) {
    try {
      let user = await userModel.findOne(req.query).exec();

      if (user === null) {
        respondError(req, res, codes.UserNotFound.code);
      } else {
        respondSuccess(req, res, user._id.toString());
      }
    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.UserNotFound.code);
    }
  }

  async reportUser(req, res) {
    if (req.info.user._id.toString() === req.params.uid) {
      respondError(req, res, codes.CantReportSelf.code);
    } else {
      try {
        let user = await userModel.findOne({ _id: req.params.uid }).exec();

        if (null === user) {
          respondError(req, res, codes.UserNotFound.code);
        } else if (undefined !== user.reported.find((t) => { return t.toString() === req.info.user._id.toString(); })) {
          respondError(req, res, codes.AlreadyReported.code);
        } else {
          user.reported.push(req.info.user._id);

          let savedUser = await user.save();
          respondSuccess(req, res, null);
        }
      } catch (e) {
        logger.error(e.message);
        respondError(req, res, codes.UserUpdateFailed.code);
      }
    }
  }

  async updateUser(req, res) {
    if (req.info.user !== undefined) {
      // TODO:

    } else {
      respondError(req, res, codes.UserNotFound.code);
    }
  }

  async updateUserToken(req, res) {
    if (req.info.user !== undefined) {
      let user = req.info.user;
      user.token = req.body.token;

      let savedUser = await user.save();

      respondSuccess(req, res, savedUser.token);
    } else {
      respondError(req, res, codes.UserNotFound.code);
    }
  }

  async requireUser(req, res, next) {
    let userId = null;
    if (req.params.uid) {
      userId = req.params.uid;
    }
    if (req.body.uid) {
      userId = req.body.uid;
    }
    if (req.query.uid) {
      userId = req.query.uid;
    }
    

    let errCode = await loadUserOnRequest(req, res, { _id: userId} );

    if (null !== errCode) {
      respondError(req, res, errCode);
    } else {
      next();
    }
  }


  async requireAuth(req, res, next) {
    let userToken = null;
    if (req.params.uid) {
      userId = req.params.uid;
    }
    
    let errCode = await loadUserOnRequest(req, res, { token: userToken });

    if (null !== errCode) {
      respondError(req, res, errCode);
    } else {
      next();
    }
  }

  async permitAdmin(req, res, next) {
    if (true === isAdmin(req)) {
      next();
    } else {
      respondError(req, res, codes.UserPermissionNotAllowed.code);
    }
  }

  async permitOwnerOrAdmin(req, res, next) {
    if (true === isAdmin(req) ||
      true === isOwner(req)) {
      next();
    } else {
      respondError(req, res, codes.UserPermissionNotAllowed.code);
    }
  }

  async permitOwner(req, res, next) {
    if (true === isOwner(req)) {
      next();
    } else {
      respondError(req, res, codes.UserPermissionNotAllowed.code);
    }
  }

  async addLikedDrama(req, res) {
    try {
      let user = req.info.user;

      if (user !== null) {
        if (!sanitizeObjectId(req.params.did)) {
          return codes.InvalidObjectID.code;
        }

        user.likedDrama.push(new ObjectId(req.params.did));

        let index = user.likedDrama.findIndex( (p) => p.toString === req.params.did);

        if (-1 !== index) {
          let savedLikedDrama = await user.save();
          respondSuccess(req, res, savedLikedDrama.likedDrama);
        } else {
          respondError(req, res, codes.AddLikedDramaFailed.code);
        }

      } else {
        respondError(req, res, codes.UserNotFound.code);
      }

    } catch (e) {
      logger.error(e.message);
      return codes.AddLikedDramaFailed.code;
    }
  }

  async removeLikedDrama(req, res) {
    try {
      let user = req.info.user;

      if (user !== null) {
        if (!sanitizeObjectId(req.params.did)) {
          return codes.InvalidObjectID.code;
        }

        let index = user.likedDrama.findIndex( (p) => p.toString === req.params.did);

        if(-1 !== index) {
           user.likedDrama.splice(index, 1);
           let savedLikedDrama = await user.save();
           respondSuccess(req, res, savedLikedDrama.likedDrama);
        } else {
          respondError(req, res, codes.RemoveLikedDramaFailed.code);
        }

      } else {
        respondError(req, res, codes.UserNotFound.code);
      }

    } catch (e) {
      logger.error(e.message);
      return codes.RemoveLikedDramaFailed.code;
    }

  }

  async getLikedDrama(req, res) {
    try {
      let user = req.info.user;

      if (user !== null) {
        let likedDrama = user.likedDrama;

        if (likedDrama === null) {
          respondError(req, res, codes.getLikedDramaFailed);
        }
        else {
          respondSuccess(req, res, likedDrama);
        }
      } else {
        respondError(req, res, codes.UserNotFound.code);
      }
    } catch (e) {
      logger.error(e.message);
      return codes.GetLikedDramaFailed.code;
    }
  }
}

let userCtrl = new UserCtrl();

export default userCtrl;