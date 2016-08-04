"use strict";

import '../../../lib/app/model/chatroom';
import '../../../../test-json/chatrooms.json';

export default async function () {
  return await chatroomModel.remove({}).exec()
                .then(chatroomModel.create(chatroomData));
};