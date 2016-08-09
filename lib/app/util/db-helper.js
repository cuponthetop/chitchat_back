"use strict";

import { default as config } from '../../../../config/config';
import { default as mongoose } from 'mongoose';
import B from 'bluebird';

async function connect() {
  let dbUri = config.db.uri + config.db.dbName;
  let dbOptions = {
    username: config.db.username,
    password: config.db.password
  };

  // let mConnect = B.fromCallback(mongoose.connect);

  return await mongoose.connect(dbUri, dbOptions);
};

async function disconnect() {
  // let disconnect = B.fromCallback(mongoose.disconnect).timeout(300);
  return await mongoose.disconnect();
};

export { connect, disconnect };