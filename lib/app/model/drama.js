"use strict";

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let dramaSchema = new Schema({
  // 드라마 제목
  title: { type: String, required: true },
  // 드라마 시간
  airTime: { type: [Date], required: true },
  channel: { type: String },
  chatrooms: { type: [Schema.Types.ObjectId], ref: 'chatrooms' },

  category: { type: String },
  en: { type: String }
});

dramaSchema.index({ title: 1 });

mongoose.model('dramas', dramaSchema);

let dramaModel = mongoose.model('dramas');
export default dramaModel;