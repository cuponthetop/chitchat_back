"use strict";

import '../model/user';
import { respondError, respondSuccess } from '../util/response';
import { codes } from '../util/status';
import B from 'bluebird';
import { logger } from '../util/logger';

function isAdmin(req) {

}

function isOwner(req) {

}

async function loadUserOnRequest(req, res, userId) {

}

function isLoggedIn(req) {
  
}

class UserCtrl {
  constructor () {

  }

  async login(req, res) {

  }

  async logout (req, res) {

  }

  async deleteUser(req, res) {

  }

  async getUser(req, res) {

  }
  
  async reportUser(req, res) {

  }

  async updateUser(req, res) {

  }

  async requireUser(req, res, next) {

  }

  async permitAdmin(req, res, next) {

  }
  
  async permitOwnerOrAdmin(req, res, next) {

  }

  async permitOwner(req, res, next) {

  }


}

let userCtrl = new UserCtrl();

export default userCtrl;