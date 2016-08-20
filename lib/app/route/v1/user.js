"use strict";

import { default as express } from 'express';
import { default as userCtrl } from '../../controller/user';

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
 * @apiSuccess {String} token accessToken
 * 
 * @apiUse UserPermissionNotAllowed
 * @apiUse UserAlreadyLoggedIn
 * @apiUse UserEmailAlreadyInUse
 * 
 * 
 */
user.post('/users', userCtrl.createUser);

/**
 * @api {put} /users/:uid/token Update User Login Token Information
 * @apiName UpdateToken
 * @apiGroup User
 * 
 * @apiParam {ObjectId} :uid User's unique ID
 * 
 * @apiUse SuccessCode
 * @apiSuccess {String} token accessToken
 * 
 * @apiUse UserNotFound
 * @apiUse UserUpdateFailed
 */
user.put('/users/:uid/token', userCtrl.requireUser, userCtrl.updateUserToken);

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
user.put('/users/:uid', userCtrl.requireUser, userCtrl.permitOwnerOrAdmin, userCtrl.updateUser);

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
user.get('/users', userCtrl.getUserIDWithParams);

export default user;