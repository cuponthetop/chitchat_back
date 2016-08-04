"use strict";

import { default as express } from 'express';
import { default as user } from './v1/user';
import { default as drama } from './v1/drama';
import { default as chatroom } from './v1/chatroom';

let api = express();

api.use('/v1', user);
api.use('/v1', drama);
api.use('/v1', chatroom);

export default api;