"use strict";

import '../../../lib/app/model/channel';
import '../../../../test-json/channels.json';

export default async function () {
  return await channelModel.remove({}).exec()
                .then(channelModel.create(channelData));
};