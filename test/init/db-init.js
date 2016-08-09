"use strict";

import { connect, disconnect } from '../../lib/app/util/db-helper';
import { userInit } from './tables/users-init';
import { dramaInit } from './tables/dramas-init';
import { chatroomInit } from './tables/chatrooms-init';
import { channelInit } from './tables/channels-init';
import B from 'bluebird';

async function main() {

  let jobs = [
    connect,
    userInit,
    channelInit,
    dramaInit,
    chatroomInit,
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
// jobs.forEach(async function (fn) {
//   console.log(fn);
//   return await fn();
// })
// .catch(console.log)
// .finally(() => {
//   process.exit(0);
// });

export default main();