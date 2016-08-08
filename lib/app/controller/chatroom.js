"use strict";

import '../model/chatroom';
import { respondError, respondSuccess } from '../util/response';
import { codes } from '../util/status';
import B from 'bluebird';
import { logger } from '../util/logger';

/*
async function loadChatroom(req, res, chatroomId) {
  try {
    let chatroom = chatroomModel.findOne({ _id: chatroomId }).exec();

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
  
}*/

class ChatroomCtrl {
  constructor () {

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

      //중복 검사 필요한 거 있나? 드라마별 성별 채팅방은 하나씩 만들어져야함
      let savedChatroom = await newChatroom.save();
      respondSuccess(req, res, savedChatroom._id.toString());

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.ChatroomAddFailed.code);
    }
  }

  async removeChatroom(req, res) {
    try {
      let removeChatroom = await chatroomModel.findOneAndRemove({ _id: req.params.cid }).exec();

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
      let chatroom = await chatroomModel.findOne({ _id: req.params.cid }).exec();

      if (chatroom === null){
        respondError(req, res, codes.ChatroomNotFound.code);
      } else {
        respondSuccess(req, res, chatroom);
      }
      
    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.GetChatroomsFailed.code);
    }
  }
  
  async updateChatroom(req, res) {
    if (req.info.chatroom !== undefined) {
      // add

    } else {
      respondError(req, res, codes.ChatroomNotFound.code); 
    }

  }

}

let chatroomCtrl = new ChatroomCtrl();

export default chatroomCtrl;