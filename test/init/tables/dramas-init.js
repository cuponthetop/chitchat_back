"use strict";

import { default as dramaModel } from '../../../lib/app/model/drama';
let dramaData = require('../../../../test-json/dramas.json');

export async function dramaInit() {
  await dramaModel.remove({}).exec();
  await dramaModel.create(dramaData);
};