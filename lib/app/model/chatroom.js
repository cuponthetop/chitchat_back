"use strict";

import 'mongoose';

let Schema = mongoose.Schema;

let chatroomSchema = new Schema({
  participants: { type: [Schema.Types.ObjectId] },
  targetGender: { type: String, required: true },
  targetDrama: { type: Schema.Types.ObjectId, required: true, ref: 'dramas' },
  address: { type: String },
  isUp: { type: Boolean }
});

chatroomSchema.index({ targetDrama: 1 });

mongoose.model('chatrooms', chatroomSchema);

let chatroomModel = mongoose.model('chatrooms');
export default chatroomModel;