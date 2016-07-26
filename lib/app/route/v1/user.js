"use strict";

var express = require('express')
  , UserCtrl = require('../../controller/user')
  ;

var user = express();

// user.get('/users/:uid', UserCtrl.getUser);

// user.put('/users/:uid/enter/:chatroomid', UserCtrl.enterChatroom);

// user.put('/users/:uid/like/:dramaid', UserCtrl.likeDrama);

// user.put('/users/:uid/report', UserCtrl.reportUser);

// user.post('/users', UserCtrl.createUser);

// // self + admin

// user.put('/users/:uid', UserCtrl.updateUser);

// user.delete('/users/:uid', UserCtrl.deleteUser);

// // admin

// user.get('/users', UserCtrl.getUsers);

module.exports = user;