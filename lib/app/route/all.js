"use strict";

var express = require('express')
  , user = require('./v1/user')
  , drama = require('./v1/drama')
  , chatroom = require('./v1/chatroom')
  ;

var api = express();

api.use('/v1', user);
api.use('/v1', drama);
api.use('/v1', chatroom);

module.exports = api;