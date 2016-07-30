"use strict";

/**
 * @apiDefine SuccessCode
 * @apiSuccess {Number} status status of request
 */

/**
 * @apiDefine UserModel
 * @apiSuceess {Object} value User Information
 * @apiSuccess {String} value._id User ID
 * @apiSuccess {String} value.name User name
 * @apiSuccess {String} value.nickname User nickname
 * @apiSuccess {String} value.gender User gender (male or female)
 * @apiSuccess {Boolean} value.admin is User Admin
 * @apiSuccess {Object[]} value.likedDrama List of Dramas User liked
 * @apiSuccess {Object[]} value.joinedChatroom List of Chatrooms User has joined
 * @apiSuccess {String} value.email User email address
 * @apiSuccess {Date} value.birthday User birthday
 * @apiSuccess {Object[]} value.reported User Reported Count
 */

/**
 * @apiDefine Channel
 * @apiSuccess {Object} value Channel Information
 * @apiSuccess {String} value._id Channel ID
 * @apiSuccess {String} value.name Channel name
 * @apiSuccess {String} value.logo Channel Logo image address
 */

/**
 * @apiDefine DramaModel
 * @apiSuccess {Object} value Drama Information
 * @apiSuccess {String} value._id Drama ID
 * @apiSuccess {Date[]} value.airTime When Drama is being broadcasted
 * @apiSuccess {String} value.title Drama's title
 * @apiSuccess {Object} value.channel Drama's Channel Object
 * @apiSuccess {Object[]} value.chatrooms List of Drama's Chatrooms
 * @apiSuccess {String} value.category Drama's category
 */

/**
 * @apiDefine ChatroomModel
 * @apiSuccess {Object} value Chatroom Information
 * @apiSuccess {String} value._id Chatroom ID
 * @apiSuccess {Object[]} value.participatns List of users in this chatrooms
 * @apiSuccess {String} value.targetGender Which gender this chatroom targets
 * @apiSuccess {Object} value.targetDrama Owner Drama object for this chatroom
 * @apiSuccess {String} value.address IPv4 address with port number for this chatroom
 * @apiSuccess {Boolean} value.isUp is this chatroom up and running
 */

/**
 * @apiDefine TextModel
 * @apiSuccess {Object} value Chatroom Text Information
 * @apiSuccess {Object} value.whichRoom in which Chatroom this text was emitted
 * @apiSuccess {Object} value.whoSaid which User emitted this text
 * @apiSuccess {Date} value.whenSaid when the User emitted this text
 * @apiSuccess {String} value.saidWhat what the User said
 */