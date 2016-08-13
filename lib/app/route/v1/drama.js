"use strict";

import { default as express } from 'express';
import '../../controller/drama';

let drama = express();

// drama.use('dramas', dramaCtrl.requireDrama);

/**
 * @api {get} /dramas/:did Get Drama Information
 * @apiName GetDrama
 * @apiGroup Drama
 *
 * @apiPermission user
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :did Drama's unique ID
 *
 * @apiUse SuccessCode
 * @apiUse DramaModel
 *
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse DramaNotFound
 */

// drama.get('/dramas/:did', dramaCtrl.getDrama);

/**
 * @api {get} /dramas/:airtime Get Drama List Information
 * @apiName GetDramaList
 * @apiGroup Drama
 *
 * @apiParam {Date} :airtime Drama's date and time
 *
 * @apiUse SuccessCode
 * @apiUse DramaModel
 *
 * @apiUse DramaListGetFailed
 */

// drama.get('/dramas', dramaCtrl.getDramaList);

/**
 * @api {post} /dramas/:did Create Drama Information
 * @apiName CreateDrama
 * @apiGroup Drama
 *
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :did Drama's unique ID
 * @apiParam {String} title Drama's title
 * @apiParam {Date[]} airTime Drama's air-time List
 * @apiParam {String} :channelId Drama's Channel ID
 * @apiParam {String} :categoryId Drama's Category ID
 * @apiParam {String[]} :chatroomId Drama's Chatrooms ID List
 * 
 * @apiUse SuccessCode
 * @apiUse DramaModel
 *
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse DramaCreateFailed
 */

// drama.post('/dramas/:did', userCtrl.requireUser, UserCtrl.permitAdmin, dramaCtrl.createDrama);

/**
 * @api {put} /dramas/:did Update Drama Information
 * @apiName UpdateDrama
 * @apiGroup Drama
 *
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :did Drama's unique ID
 * @apiParam {String} title Drama's title
 * @apiParam {Date[]} airTime Drama's air-time List
 * @apiParam {String} :channelId Drama's Channel ID
 * @apiParam {String} :categoryId Drama's Category ID
 * @apiParam {String[]} :chatroomId Drama's Chatrooms ID List
 * 
 * @apiUse SuccessCode
 * @apiUse DramaModel
 *
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse DramaUpdateFailed
 */

// drama.put('/dramas/:did', userCtrl.requireUser, UserCtrl.permitAdmin, dramaCtrl.updateDrama);

/**
 * @api {delete} /dramas/:did Remove Drama Information
 * @apiName RemoveDrama
 * @apiGroup Drama
 *
 * @apiPermission admin
 *
 * @apiParam {ObjectId} :did drama's unique ID
 *
 * @apiUse SuccessCode
 * @apiUse DramaModel
 *
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse DramaRemovalFailed
 */

// drama.delete('/dramas/:did/', userCtrl.requireUser, UserCtrl.permitAdmin, dramaCtrl.removeDrama);

/**
 * @api {get} /dramas/:did Get Drama Chatrooms
 * @apiName getDramaChatroom
 * @apiGroup Drama
 *
 * @apiParam {ObjectId} :did Drama's unique ID
 *
 * @apiUse SuccessCode
 * @apiUse chatroomModel
 *
 * @apiUse UserAuthRequired
 * @apiUse UserPermissionNotAllowed
 * @apiUse ChatroomNotFound
 */

// drama.get('/dramas/:did/chatrooms', chatroomCtrl.getDramaChatroom);


export default drama;