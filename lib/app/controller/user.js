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

async function loadUserOnRequest(req, res, userId) {
  try {
    let user = userModel.findOne({ _id: userId }).exec();

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
      let newUser = new userModel({
        fbid: req.body.fbid,
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email
      });

      let user = await userModel.findOne({ fbid: givenUser.fbid }).exec();

      if (null === user) {
        let savedUser = await newUser.save();

        respondSuccess(req, res, savedUser._id.toString());
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

    let errCode = await loadUserOnRequest(req, res, userId);

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


}

let userCtrl = new UserCtrl();

export default userCtrl;