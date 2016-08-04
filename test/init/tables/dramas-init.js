"use strict";

import '../../../lib/app/model/drama';
import '../../../../test-json/dramas.json';

export default async function () {
  return await dramaModel.remove({}).exec()
                .then(dramaModel.create(dramaData));
};