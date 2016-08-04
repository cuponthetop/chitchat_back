"use strict";

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let channelSchema = new Schema({
  name: { type: String, required: true },
  logo: { type: String }
});

mongoose.model('channels', channelSchema);

let channelModel = mongoose.model('channels');
export default channelModel;