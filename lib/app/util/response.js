"use strict";

import { codes, getSummaryByCode } from './status';
import _ from 'lodash';
import { logger } from './logger';

function respondError(req, res, statusObj, value) {
  var code = 1, message = "An unknown error occurred";
  var newValue = value;
  if (typeof statusObj === "number") {
    code = statusObj;
    message = getSummaryByCode(code);
  } else if (typeof statusObj.code !== "undefined") {
    code = statusObj.code;
    message = statusObj.summary;
  } else if (typeof statusObj.message !== "undefined") {
    message = statusObj.message;
  }

  if (typeof newValue === "object") {
    if (newValue !== null && _.has(value, "message")) {
      // make sure this doesn't get obliterated
      value.origValue = value.message;
      message += " (Original error: " + value.message + ")";
    }
    newValue = _.extend({ message: message }, value);
  } else {
    newValue = { message: message, origValue: value };
  }
  var response = { status: code, value: newValue };
  logger.debug("Responding to client with error: " + JSON.stringify(response));

  res.status(500).json(response);
};

function respondSuccess(req, res, value) {
  var response = { status: codes.Success.code, value: value };

  if (typeof response.value === "undefined") {
    response.value = '';
  }

  var printResponse = _.clone(response);
  var maxLen = 1000;
  if (printResponse.value !== null &&
    typeof printResponse.value.length !== "undefined" &&
    printResponse.value.length > maxLen) {
    printResponse.value = printResponse.value.slice(0, maxLen) + "...";
  }
  res.jsonResp = JSON.stringify(printResponse);
  logger.debug("Responding to client with success: " + res.jsonResp);

  res.status(200).json(response);
};

export { respondError, respondSuccess };