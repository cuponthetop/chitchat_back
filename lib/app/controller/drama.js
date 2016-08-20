"use strict";

import { default as dramaModel} from '../model/drama';
import { respondError, respondSuccess } from '../util/response';
import { codes } from '../util/status';
import B from 'bluebird';
import { logger } from '../util/logger';


class DramaCtrl {
  constructor() {

  }

  async createDrama(req, res) {
    try {
      let newDrama = new dramaModel({
        title: req.body.title,
        airTime: req.body.airTime,
        channel: req.body.channel,
        chatrooms: req.body.chatrooms,
        category: req.body.category
      });

      let savedDrama = await dramaModel.save();

      if (savedDrama === null) {
        respondError(req, res, codes.DramaCreateFailed.code);
      } else {
        respondSuccess(req, res, savedDrama._id.toString());
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.DramaCreateFailed.code);
    }
  }

  async removeDrama(req, res) {
    try {
      let removeDrama = await dramaModel.findOneAndRemove({ _id: req.params.did }).exec();

      if (removeDrama === null) {
        respondError(req, res, codes.DramaRemovalFailed.code);
      } else {
        respondSuccess(req, res, removeDrama);
      }

    } catch (e) {
      logger.error(e.message);
      respondSuccess(req, res, codes.DramaRemovalFailed.code);
    }
  }

  async getDrama(req, res) {
    try {
      let drama = await dramaModel.findOne({ _id: req.params.did }).exec();

      if (drama === null) {
        respondError(req, res, codes.DramaNotFound.code);
      } else {
        respondSuccess(req, res, drama);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.DramaNotFound.code);
    }
  }

  async getDramaList(req, res) {
    try {
      let dramaList = await dramaModel.find(
        {
          airTime: {
            "$elemMatch": {
              "$and": [
                {
                  "$gte": new Date(req.query.airtime1)
                },
                {
                  "$lte": new Date(req.query.airtime2)
                }
              ]
            }
          }
        }
      ).exec();

      if (dramaList === null) {
        respondError(req, res, codes.DramaListGetFailed.code);
      } else {
        respondSuccess(req, res, dramaList);
      }
    } catch (e) {
      logger.error(e.message);
      respondError(req, ress, codes.DramaListGetFailed);
    }
  }

  async updateDrama(req, res) {
    try {
      let updataDrama = await dramaModel.findOneAndUpdata(
        {
          _id: req.params.did
        },
        {
          title: req.body.title,
          airTime: req.body.airTime,
          channel: req.body.channel,
          chatrooms: req.body.chatrooms,
          category: req.body.category
        }).exec();

      if (updateDrama === null) {
        respondError(req, res, codes.DramaUpdateFailed.code);
      } else {
        respondSuccess(rea, res, updataDrama);
      }

    } catch (e) {
      logger.error(e.message);
      respondError(req, res, codes.DramaUpdateFailed.code);
    }
  }

}

let dramaCtrl = new DramaCtrl();

export default dramaCtrl;