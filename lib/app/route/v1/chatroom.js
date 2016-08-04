"use strict";

import { default as express } from 'express';
import '../../controller/chatroom';

let chatroom = express();

//chatroom.use('/chatrooms', userCtrl.requireUser);

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

//chatroom.get('/chatrooms/:chatroomId', chatroomCtrl.loadChatroom, userCtrl.permitOwnerOrAdmin, chatroomCtrl.getChatroom);

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

//chatroom.post('/chatrooms', chatroomCtrl.findDrama, userCtrl.permitAdmin, chatroomCtrl.addChatroom);

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

//chatroom.put('chatrooms/:chatroomId', userCtrl.permitAdmin, chatroomCtrl.updateChatroom);

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

//chatroom.delete('chatrooms/:chatroomId', chatroomCtrl.removeChatroom);

export default chatroom;