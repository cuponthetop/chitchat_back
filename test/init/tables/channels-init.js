"use strict";

import { default as channelModel } from '../../../lib/app/model/channel';
let channelData = require('../../../../test-json/channels.json');

export async function channelInit() {
  await channelModel.remove({}).exec();
  await channelModel.create(channelData);
};