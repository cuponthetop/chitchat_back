"use strict";

var express = require('express')
//  , UserCtrl = require('../../controller/user')
  , ChatroomCtrl = require('../../controller/chatroom')
  ;

var chatroom = express();

//chatroom.use('/chatrooms', UserCtrl.requireUser);

/**
 * @api {get} /chatrooms/:chatroomId Get individual chatroom
 * @apiName GetChatroom
 * @apiGroup Chatroom
 * 
 * @apiPermission owner
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :chatroomId Chatroom's unique ID.
 *
 * @apiUse SuccessCode
 *
 * @apiUse ChatroomNotFound
 * @apiUse GetChatroomsFailed
 * @apiUse MembersOfChatroomGottenFailed
 * @apiUse MemberEnterChatroomFailed
 * @apiUse MemberLeaveFailed
 * @apiUse MemberPermissionNotAllowed
 * @apiUse NotAcceptedAddress
 * @apiUse TextsInChatroomGottenFailed
 * @apiUse TextNotFound
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * 
 */

//chatroom.get('/chatrooms/:chatroomId', ChatroomCtrl.loadChatroom, UserCtrl.permitOwnerOrAdmin, ChatroomCtrl.getChatroom);

/**
 * @api {post} /chatrooms add chatroom
 * @apiName AddChatroom
 * @apiGroup Chatroom
 * 
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :chatroomId Chatroom's unique ID.
 * @apiParam {String[]} :userId Chatroom's participants unique ID Array.
 * @apiParam {String} targetGender Chatroom's target gender(Male or Female or Both)
 * @apiParam {String} :dramaId Chatroom's drama unique ID.
 * @apiParam {String} address IPv4 Address with Port
 * @apiParam {Boolean} isUp Chatroom is exist or not
 * 
 * @apiUse SuccessCode
 *
 * @apiUse ChatroomAddFailed
 * @apiUse AddTextToChatroomFailed
 * @apiUse InsertTextInDBFailed
 * @apiUse EmptyText
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * 
 */

//chatroom.post('/chatrooms', ChatroomCtrl.findDrama, UserCtrl.permitAdmin, ChatroomCtrl.addChatroom);

/**
 * @api {put} chatrooms/:chatroomId Update chatroom information
 * @apiName UpdateChatroom
 * @apiGroup Chatroom
 *
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :chatroomId Chatroom's unique ID.
 * @apiParam {String[]} :userId Chatroom's participants unique ID List.
 * @apiParam {String} targetGender Chatroom's target gender(Male or Female or Both)
 * @apiParam {String} :dramaId Chatroom's drama unique ID.
 * @apiParam {String} address IPv4 Address with Port
 * @apiParam {Boolean} isUp Chatroom is exist or not
 * 
 * @apiUse SuccessCode
 *
 * @apiUse ChatroomUpdateFailed
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * 
 */

//chatroom.put('chatrooms/:chatroomId', UserCtrl.permitAdmin, ChatroomCtrl.updateChatroom);

/**
 * @api {delete} chatrooms/:chatroomId Remove chatroom information
 * @apiName RemoveChatroom
 * @apiGroup Chatroom
 *
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :chatroomId Chatroom's unique ID.
 *
 * @apiUse SuccessCode
 *
 * @apiUse ChatroomRemoveFailed
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * 
 */

//chatroom.delete('chatrooms/:chatroomId', ChatroomCtrl.removeChatroom);

module.exports = chatroom;