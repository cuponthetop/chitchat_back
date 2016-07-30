"use strict";

import '../../../lib/app/model/chatroom';
import '../chatrooms.json';

export default async function () {
  return await chatroomModel.remove({}).exec()
                .then(chatroomModel.create(chatroomData));
};