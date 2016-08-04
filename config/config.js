"use strict";

var path = require('path');
var _ = require('lodash');

let nodeEnv = process.env.NODE_ENV || 'development';

let config = {
  db: '',
  user: '',
  chat: '',
};

config = _.mapValues(config, function (val, configName) {
  var configPath = path.resolve(__dirname, nodeEnv, configName + '.js');
  return require(configPath);
});

module.exports = config;