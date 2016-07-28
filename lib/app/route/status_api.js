"use strict";

/**
 * @apiDefine UnknownError
 * @apiError UnknownError (1) Unknown Error has occured! We are doomed!
 */

/**
 * @apiDefine InsufficientParameter
 * @apiError InsufficientParameter (10) Supplied parameters were not sufficient forhandling request
 */

/**
 * @apiDefine UserNotFound
 * @apiError UserNotFound (101) Requested User was not found on DB
 */

/**
 * @apiDefine UserUpdateFailed
 * @apiError UserUpdateFailed (102) User update failed
 */

/**
 * @apiDefine UserTokenMismatch
 * @apiError UserTokenMismatch (103) provided token mismatch
 */

/**
 * @apiDefine UserTokenAlreadyExpired
 * @apiError UserTokenAlreadyExpired (104) provided token is already expired
 */

/**
 * @apiDefine UserAlreadyVerified
 * @apiError UserAlreadyVerified (105) user already verified oneself
 */

/**
 * @apiDefine UserPermissionNotAllowed
 * @apiError UserPermissionNotAllowed (106) permission current user posesses is not enough to perform selected action
 */

/**
 * @apiDefine UserAuthRequired
 * @apiError UserAuthRequired (111) user authentication is required
 */

/**
 * @apiDefine UserAlreadyLoggedIn
 * @apiError UserAlreadyLoggedIn (112) user is trying to login but this userwas already logged in as an user
 */

/**
 * @apiDefine UserLoggingOutWhenNotLoggedIn
 * @apiError UserLoggingOutWhenNotLoggedIn (113) user is trying to logout but this useris not logged in as any user
 */

/**
 * @apiDefine UserCredentialsNotMatch
 * @apiError UserCredentialsNotMatch (114) provided user credential is not correct
 */

/**
 * @apiDefine UserNotVerified
 * @apiError UserNotVerified (115) provided user is not yet verified
 */

/**
 * @apiDefine UserEmailAlreadyInUse
 * @apiError UserEmailAlreadyInUse (116) provided user email is already in use
 */

/**
 * @apiDefine CantReportSelf
 * @apiError CantReportSelf (117) user cannot report oneself
 */

/**
 * @apiDefine UserRemovalFailed
 * @apiError UserRemovalFailed (119) user removal failed
 */

/**
 * @apiDefine EmailSendFailed
 * @apiError EmailSendFailed (119) sending email to user failed
 */

/**
 * @apiDefine AlreadyReported
 * @apiError AlreadyReported (600) user can only get reported once
 */

/**
 * @apiDefine RateLimitExceeded
 * @apiError RateLimitExceeded (40004) Too many requests, please try again later.
 */

/**
 * @apiDefine ChatroomNotFound
 * @apiError ChatroomNotFound (301) Requested chatroom is not found
 */

/**
 * @apiDefine GetChatroomsFailed
 * @apiError GetChatroomsFailed (302) failed to get chatrooms
 */

/**
 * @apiDefine ChatroomAddFailed
 * @apiError ChatroomAddFailed (303) fail to add the chatroom
 */

/**
 * @apiDefine ChatroomUpdateFailed
 * @apiError ChatroomUpdateFailed (304) fail to update the chatroom
 */

/**
 * @apiDefine ChatroomRemoveFailed
 * @apiError ChatroomRemoveFailed (305) fail to remove the chatroom
 */

/**
 * @apiDefine MembersOfChatroomGottenFailed
 * @apiError MembersOfChatroomGottenFailed (306) fail to get members on the chatroom
 */

/**
 * @apiDefine MemberEnterChatroomFailed
 * @apiError MemberEnterChatroomFailed (307) fail to enter the chatroom
 */

/**
 * @apiDefine MemberLeaveFailed
 * @apiError MemberLeaveFailed (308) fail to leave the chatroom
 */

/**
 * @apiDefine MemberPermissionNotAllowed
 * @apiError MemberPermissionNotAllowed (309) This chatroom is not allowed for member of different target gender or in not loged
 */

/**
 * @apiDefine NotAcceptedAddress
 * @apiError NotAcceptedAddress (310) This chatroom is not allowed for suspended member
 */

/**
 * @apiDefine TextsInChatroomGottenFailed
 * @apiError TextsInChatroomGottenFailed (311) fail to get texts on the chatroom
 */

/**
 * @apiDefine AddTextToChatroomFailed
 * @apiError AddTextToChatroomFailed (312) fail to add the text to the chatroom
 */

/**
 * @apiDefine TextNotFound
 * @apiError TextNotFound (313) Requested text was not found on DB
 */

/**
 * @apiDefine InsertTextInDBFailed
 * @apiError InsertTextInDBFailed (314) insert text in DB failed
 */

/**
 * @apiDefine EmptyText
 * @apiError EmptyText (315) Text does not have any comment
 */

/**
 * @apiDefine DramaNotFound
 * @apiError DramaNotFound (901) Requested Drama was not found on DB
 */

/**
 * @apiDefine DramaUpdateFailed
 * @apiError DramaUpdateFailed (902) Drama update failed
 */

/**
 * @apiDefine DramaCreateFailed
 * @apiError DramaCreateFailed (903) Drama create failed
 */

/**
 * @apiDefine DramaRemovalFailed
 * @apiError DramaRemovalFailed (904) Drama remove failed
 */

/**
 * @apiDefine CouldNotFetchCount
 * @apiError CouldNotFetchCount (700) error when calling db
 */

