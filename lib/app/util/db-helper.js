"use strict";

import '../../../../config/config';
import 'mongoose';
import B from 'bluebird';

async function connect() {
  let dbUri = config.db.uri + config.db.dbName;
  let dbOptions = {
    username: config.db.username,
    password: config.db.password
  };

  let connect = B.fromCallback(mongoose.connect);

  return await connect(dbUri, dbOptions);
};

async function disconnect() {
  let disconnect = B.fromCallback(mongoose.disconnect).timeout(300);
  return await disconnect();
};

export { connect, disconnect };