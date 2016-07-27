"use strict";

var express = require('express')
  , DramaCtrl = require('../../controller/drama')
  ;

var drama = express();

// drama.use('dramas', DramaCtrl.requireDrama);

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

// drama.get('/dramas/:did', DramaCtrl.getDrama);

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

// drama.post('/dramas/:did', UserCtrl.permitAdmin, DramaCtrl.createDrama);

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

// drama.put('/dramas/:did', UserCtrl.permitAdmin, DramaCtrl.updateDrama);

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
 * @apiUse DramaDeleteFailed
 */

// drama.delete('/dramas/:did/', DramaCtrl.removeDrama);

module.exports = drama;