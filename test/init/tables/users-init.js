"use strict";

import { default as userModel } from '../../../lib/app/model/user';
let userData = require('../../../../test-json/users.json');

export async function userInit() {
  await userModel.remove({}).exec();
  await userModel.create(userData);
};