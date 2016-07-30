"use strict";

import { connect, disconnect } from '../../lib/app/util/db-helper';
import './tables/users-init';
import './tables/dramas-init';
import './tables/chatrooms-init';
import './tables/channels-init';
import B from 'bluebird';

let jobs = [
  connect,
  userInit,
  channelInit,
  dramaInit,
  chatroomInit,
  disconnect
];

B.reduce(jobs, async function (fn) {
  return await fn();
})

process.exit(0);