"use strict";

import { default as chatroomModel } from '../../../lib/app/model/chatroom';
import { default as dramaModel } from '../../../lib/app/model/drama';
import { default as awaitEach } from 'await-each';

export async function insertChatrooms() {
  await chatroomModel.remove({}).exec();
  let dramas = await dramaModel.find({}).exec();

  let acceptedGenders = ['male', 'female', 'both'];

  if (null !== dramas) {
    await awaitEach(dramas, async function (drama) {
      await awaitEach(acceptedGenders, async function (gender) {
        let chatroom = new chatroomModel({
          participants: [],
          participant_counter: 0,
          targetGender: gender,
          targetDrama: drama._id.toString()
        });

        let newRoom = await chatroom.save();

        if (null !== newRoom) {

          drama.chatrooms.push(newRoom._id.toString());
          console.log('save succeeded: ' + JSON.stringify(newRoom));
        } else {
          console.log('save failed: ' + JSON.stringify(newRoom));
        }
      });

      let ret = await drama.save();
      console.log('drama updated: ' + JSON.stringify(ret));
    });
  }
};
