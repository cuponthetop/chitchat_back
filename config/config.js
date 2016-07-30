"use strict";

import 'path';
import _ from 'lodash';

let nodeEnv = process.env.NODE_ENV || 'development';

let config = {
  db: '',
  user: '',
  chat: '',
};

config = _.mapKeys(config, function (val, configName) {
  var configPath = path.resolve(__dirname, nodeEnv, configName + '.js');
  return require(configPath);
});

export default config;