"use strict";

import 'mongoose';

let Schema = mongoose.Schema;

let dramaSchema = new Schema({
  // 드라마 제목
  title: { type: String, required: true },
  // 드라마 시간
  airTime: { type: [Date], required: true },
  channel: { type: Schema.Types.ObjectId, ref: 'channels' },
  chatrooms: { type: [Schema.Types.ObjectId] },
  
  category: { type: String }
});

dramaSchema.index({ title: 1 });

mongoose.model('dramas', dramaSchema);

let dramaModel = mongoose.model('dramas');
export default dramaModel;