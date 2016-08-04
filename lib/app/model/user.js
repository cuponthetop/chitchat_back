"use strict";

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  gender: { type: String },
  admin: { type: Boolean, required: true, default: false },

  likedDrama: { type: [Schema.Types.ObjectId] },
  joinedChatroom: { type: [Schema.Types.ObjectId] },
  
  email: { type: String, unique: true, required: true },
  birthday: { type: Date },
  reported: { type: [Schema.Types.ObjectId] }
});

UserSchema.index({ email: 1 }, { unique: true });

mongoose.model('users', UserSchema);

let userModel = mongoose.model('users');
export default userModel;