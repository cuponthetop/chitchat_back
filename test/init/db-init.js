"use strict";

import { connect, disconnect } from '../../lib/app/util/db-helper';
import { default as userInit } from './tables/users-init';
import { default as dramaInit } from './tables/dramas-init';
import { default as chatroomInit } from './tables/chatrooms-init';
import { default as channelInit } from './tables/channels-init';
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