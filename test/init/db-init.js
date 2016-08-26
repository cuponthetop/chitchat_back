"use strict";

import { connect, disconnect } from '../../lib/app/util/db-helper';
import { userInit } from './tables/users-init';
import { dramaInit } from './tables/dramas-init';
import { insertChatrooms } from './tables/chatrooms-init';
import { channelInit } from './tables/channels-init';
import B from 'bluebird';

async function main() {

  let jobs = [
    connect,
    userInit,
    channelInit,
    dramaInit,
    insertChatrooms,
    disconnect
  ];

  try {

    for (let j of jobs) {
      console.log(j);
      await j();
    }
  } catch (e) {
    console.log(e);
  }

}

export default main();