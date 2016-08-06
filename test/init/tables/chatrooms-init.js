"use strict";

import { default as chatroomModel } from '../../../lib/app/model/chatroom';
let chatroomData = require('../../../../test-json/chatrooms.json');

export async function chatroomInit() {
  await chatroomModel.remove({}).exec();
  await chatroomModel.create(chatroomData);
};