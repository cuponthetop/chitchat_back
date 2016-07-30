"use strict";

import { connect, disconnect } from '../../lib/app/util/db-helper';
import './tables/users-init';
import './tables/dramas-init';
import './tables/chatrooms-init';
import './tables/channels-init';

[
  connect,
  userInit,
  channelInit,
  dramaInit,
  chatroomInit,
  disconnect
].reduce((fn) => {
  return await fn();
})

process.exit(0);