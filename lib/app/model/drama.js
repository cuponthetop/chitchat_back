"use strict";

var mongoose = require("mongoose")
    // , config = require('../../config/config')
  , Schema = mongoose.Schema
  ;

var Drama = new Schema({
    // 드라마 제목
    title: { type: String, unique: true, required: true },
    // 드라마 시간
    // airTime: { type: }
})