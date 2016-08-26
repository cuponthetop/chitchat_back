"use strict";

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let chatroomSchema = new Schema({
  participants: { type: [Schema.Types.ObjectId] },
  participant_counter: { type: Schema.Types.Number },
  targetGender: { type: String, required: true },
  targetDrama: { type: Schema.Types.ObjectId, required: true, ref: 'dramas' }
});

chatroomSchema.index({ targetDrama: 1 });

mongoose.model('chatrooms', chatroomSchema);

let chatroomModel = mongoose.model('chatrooms');
export default chatroomModel;