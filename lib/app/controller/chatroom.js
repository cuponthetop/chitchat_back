"use strict";

import { dafault as chatroomModel } from '../model/chatroom';
import { respondError, respondSuccess } from '../util/response';
import { codes } from '../util/status';
import B from 'bluebird';
import { logger } from '../util/logger';


async function loadChatroom(req, res, chatroomid) {
  try {
    let chatroom = chatroomModel.findOne({ _id: chatroomid }).exec();

    if (null === chatroom) {
      return codes.ChatroomNotFound.code;
    } else {
      req.info = req.info || {};
      req.info.chatroom = chatroom;
      return null;
    }

  } catch (e) {
    logger.error(e.message);
    return codes.ChatroomNotFound.code;
  }

}

class ChatroomCtrl {
  constructor() {

  }

  async addChatroom(req, res) {
    try {
      let newChatroom = new chatroomModel({
        participants: req.body.participants,
        targetGender: req.body.targetGender,
        targetDrama: req.body.targetDrama,
        address: req.body.address,
        isUp: req.body.isUp
      });

      let beforechatroom = await chatroomModel.findOne({ targetDrama: req.body.targetDrama, targetGender: req.body.targetGender }).exec();

      if (beforechatroom === null) {
        let savedChatroom = await newChatroom.save();

        respondSuccess(req, res, savedChatroom._id.toString());
      } else {
        respondError(req, res, codes.ChatroomAlreadyExist.code);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.ChatroomAddFailed.code);
    }
  }

  async removeChatroom(req, res) {
    try {
      let removeChatroom = await chatroomModel.findOneAndRemove({ _id: req.params.chatroomid }).exec();

      if (removeChatroom === null) {
        respondError(req, res, codes.ChatroomRemoveFailed.code);
      } else {
        respondSuccess(req, res, removeChatroom);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.ChatroomRemoveFailed.code);
    }

  }

  async getChatroom(req, res) {
    try {
      let chatroom = await chatroomModel.findOne({ _id: req.params.chatroomid }).populate({ path: 'targetDrama' }).exec();

      if (chatroom === null) {
        respondError(req, res, codes.GetChatroomsFailed.code);
      } else {
        respondSuccess(req, res, chatroom);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.GetChatroomsFailed.code);
    }
  }

  /*
  async getDramaChatroom(req, res) {
    try {
      let dramaChatroom = await chatroomModel.findOne({ targetDrama: req.parmas.did}).exec();

      if (dramaChatroom === null) {
        respondError(req, res. codes.ChatroomNotFound.code);
      } else {
        respondSuccess(req, res, dramaChatroom);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.ChatroomNotFound.code);
    }
  }*/

  async updateChatroom(req, res) {
    if (req.info.chatroom !== undefined) {
      try {
        let updateChatroom = await chatroomModel.findOneAndUpdate(
          {
            _id: req.params.chatroomid
          },
          {
            participants: req.body.participants,
            targetGender: req.body.targetGender,
            targetDrama: req.body.targetDrama,
            address: req.body.address,
            isUp: req.body.isUp
          }).exec();

        if (updateChatroom === null) {
          respondError(req, res, codes.ChatroomUpdateFailed.code);
        } else {
          respondSuccess(req, res, updateChatroom);
        }

      } catch (e) {
        logger.error(e.message);
        respondError(req, res, codes.ChatroomUpdateFailed.code);
      }

    } else {
      respondError(req, res, codes.ChatroomNotFound.code);
    }
  }

  async requireChatroom(req, res, next) {
    let chatroomId = null;
    if (req.params.chatroomid) {
      chatroomId = req.params.chatroomid;
    }
    if (req.body.chatroomid) {
      chatroomId = req.body.chatroomid;
    }
    if (req.query.chatroomid) {
      chatroomId = req.query.chatroomid;
    }

    let errCode = await loadChatroom(req, res, chatroomId);

    if (null !== errCode) {
      respondError(req, res, errCode);
    } else {
      next();
    }
  }

  async getPopularDramaList(req, res, next) {
    try {
      let popularDramaList = await chatroomModel.aggregate([
        {
          $group: {
            _id: "$targetDrama",
            CountParticipants: { $sum: "$participant_counter" }
          }
        },
        { $sort: { CountParticipants: -1 } },
        { $limit: req.query.limitNum }
      ]).exec();

      if (popularDramaList === null) {
        respondError(req, res, codes.PopularDramaListGetFailed.code);
      } else {
        respondSuccess(req, res, popularDramaList);
      }
    } catch (e) {
      logger.error(e.message);
      respondError(rea, res, codes.PopularDramaListGetFailed.code);
    }
  }

}

let chatroomCtrl = new ChatroomCtrl();

export default chatroomCtrl;