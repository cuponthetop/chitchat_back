"use strict";

import '../../../lib/app/model/user';
import '../users.json';

export default async function () {
  return await userModel.remove({}).exec()
                .then(userModel.create(userData));
};