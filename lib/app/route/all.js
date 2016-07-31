"use strict";

import 'express';
import './v1/user';
import './v1/drama';
import './v1/chatroom';

let api = express();

api.use('/v1', user);
api.use('/v1', drama);
api.use('/v1', chatroom);

export default api;