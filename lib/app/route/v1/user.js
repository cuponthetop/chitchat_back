"use strict";

import 'express';
import '../../controller/user';

let user = express();

/**
 * @api {get} /users/:uid Get User Information
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * 
 * @apiUse SuccessCode
 * @apiUse UserModel
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserNotFound
 */
user.get('/users/:uid', userCtrl.getUser);

/**
 * @api {put} /users/:uid/enter/:chatroomid Enter Specified Chatroom
 * @apiName EnterChatroom
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * @apiParam {ObjectId} :chatroomid Chatroom's ID
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse ChatroomNotFound
 * @apiUse ChatroomUpdateFailed
 * @apiUse MemberEnterChatroomFailed
 * 
 */
// user.put('/users/:uid/enter/:chatroomid', userCtrl.enterChatroom);

/**
 * @api {put} /users/:uid/like/:dramaid Like Specified Drama
 * @apiName LikeDrama
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * @apiParam {ObjectId} :dramaid Drama ID
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse DramaNotFound
 * 
 */
// user.put('/users/:uid/like/:dramaid', userCtrl.likeDrama);

/**
 * @api {put} /users/:uid/report Report User
 * @apiName ReportUser
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID to report
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserNotFound
 * @apiUse AlreadyReported
 * @apiUse CantReportSelf
 */
// user.put('/users/:uid/report', userCtrl.reportUser);

/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup User
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserAlreadyLoggedIn
 * @apiUse UserEmailAlreadyInUse
 * 
 * 
 */
user.post('/users', userCtrl.createUser);

// // self + admin

/**
 * @api {put} /users/:uid Update User Information
 * @apiName UpdateUser
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * 
 * @apiPermission admin
 * @apiPermission owner
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserNotFound
 * @apiUse UserUpdateFailed
 */
user.put('/users/:uid', userCtrl.updateUser);

/**
 * @api {delete} /users/:uid Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiPermission admin
 * @apiPermission owner
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserNotFound
 * @apiUse UserRemovalFailed
 */
user.delete('/users/:uid', userCtrl.deleteUser);

// // admin

/**
 * @api {get} /users Get All Users
 * @apiName GetUsers
 * @apiGroup User
 * 
 * @apiPermission admin
 * 
 * @apiUse SuccessCode
 * 
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 */
user.get('/users', userCtrl.getUserWithParams);

export default user;