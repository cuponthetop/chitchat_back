"use strict";

var codes = {
  Success: {
    code: 0,
    summary: 'success'
  },
  UnknownError: {
    code: 1,
    summary: 'Unknown Error has occured! We are doomed!'
  },
  InsufficientParameter: {
    code: 10,
    summary: 'Supplied parameters were not sufficient for' +
    'handling request'
  },

  /* ---------------------------User------------------------- */
  UserNotFound: {
    code: 101,
    summary: 'Requested User was not found on DB'
  },
  UserUpdateFailed: {
    code: 102,
    summary: 'User update failed'
  },
  UserTokenMismatch: {
    code: 103,
    summary: 'provided token mismatch'
  },
  UserTokenAlreadyExpired: {
    code: 104,
    summary: 'provided token is already expired'
  },
  UserAlreadyVerified: {
    code: 105,
    summary: 'user already verified oneself'
  },
  UserPermissionNotAllowed: {
    code: 106,
    summary: 'permission current user posesses is not enough to perform selected action'
  },

  UserAuthRequired: {
    code: 111,
    summary: 'user authentication is required'
  },
  UserAlreadyLoggedIn: {
    code: 112,
    summary: 'user is trying to login but this user' +
    'was already logged in as an user'
  },
  UserLoggingOutWhenNotLoggedIn: {
    code: 113,
    summary: 'user is trying to logout but this user' +
    'is not logged in as any user'
  },
  UserCredentialsNotMatch: {
    code: 114,
    summary: 'provided user credential is not correct'
  },
  UserNotVerified: {
    code: 115,
    summary: 'provided user is not yet verified'
  },
  UserEmailAlreadyInUse: {
    code: 116,
    summary: 'provided user email is already in use'
  },
  CantReportSelf: {
    code: 117,
    summary: 'user cannot report oneself'
  },
  UserRemovalFailed: {
    code: 119,
    summary: 'user removal failed'
  },
  EmailSendFailed: {
    code: 119,
    summary: 'sending email to user failed'
  },

  /* ------------------ Common -------------------------------- */

  AlreadyReported: {
    code: 600,
    summary: 'user can only get reported once'
  },
  RateLimitExceeded: {
    code: 40004,
    summary: 'Too many requests, please try again later.'
  },

  /* ---------------------Chatroom-------------------------- */
  ChatroomNotFound: {
    code: 301,
    summary: 'Requested chatroom is not found'
  },
  //GET, POST, PUT, DELETE
  GetChatroomsFailed: {
    code: 302,
    summary: 'failed to get chatrooms'
  },
  ChatroomAddFailed: {
    code: 303,
    summary: 'fail to add the chatroom'
  },
  ChatroomUpdateFailed: {
    code: 304,
    summary: 'fail to update the chatroom'
  },
  ChatroomRemoveFailed: {
    code: 305,
    summary: 'fail to remove the chatroom'
  },
  //MemberEnter, MemberGet, MemberLeave
  MembersOfChatroomGottenFailed: {
    code: 306,
    summary: 'fail to get members on the chatroom'
  },
  MemberEnterChatroomFailed: {
    code: 307,
    summary: 'fail to enter the chatroom'
  },
  MemberLeaveFailed: {
    code: 308,
    summary: 'fail to leave the chatroom'
  },
  //not allowed(성별 다른, 로그인 안한 사람)
  MemberPermissionNotAllowed: {
    code: 309,
    summary: 'This chatroom is not allowed for member of different target gender or in not loged'
  },
  //not allowed(신고)
  NotAcceptedAddress: {
    code: 310,
    summary: 'This chatroom is not allowed for suspended member'
  },
  //Text
  TextsInChatroomGottenFailed: {
    code: 311,
    summary: 'fail to get texts on the chatroom'
  },
  AddTextToChatroomFailed: {
    code: 312,
    summary: 'fail to add the text to the chatroom'
  },
  TextNotFound: {
    code: 313,
    summary: 'Requested text was not found on DB'
  },
  InsertTextInDBFailed: {
    code: 314,
    summary: 'insert text in DB failed'
  },
  EmptyText: {
    code: 315,
    summary: 'Text does not have any comment'
  },

  /* ------------------ Drama ------------------------------- */

  DramaNotFound: {
    code: 901,
    summary: "Requested Drama was not found on DB"
  },
  DramaUpdateFailed: {
    code: 902,
    summary: "Drama update failed"
  },
  DramaCreateFailed: {
    code: 903,
    summary: "Drama create failed"
  },
  DramaRemovalFailed: {
    code: 904,
    summary: "Drama remove failed"
  },

  /* ------------------ Stat -------------------------------- */

  CouldNotFetchCount: {
    code: 700,
    summary: 'error when calling db'
  }
};

function getSummaryByCode(code) {
  code = parseInt(code, 10);
  for (var c in codes) {
    if (typeof codes[c].code !== "undefined" && codes[c].code === code) {
      return codes[c].summary;
    }
  }
  return 'An error occurred';
};

export {codes, getSummaryByCode};