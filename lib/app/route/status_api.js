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
 * @apiDefine UnivNotFound
 * @apiError UnivNotFound (201) Requested University is not found
 */

/**
 * @apiDefine UnivUpdateFailed
 * @apiError UnivUpdateFailed (202) University update failed
 */

/**
 * @apiDefine UnivRemovalFailed
 * @apiError UnivRemovalFailed (203) University removal failed
 */

/**
 * @apiDefine NotAcceptedEmailAddress
 * @apiError NotAcceptedEmailAddress (204) none of universities we support accepts provided email domain
 */

/**
 * @apiDefine MultipleAcceptedEmailAddress
 * @apiError MultipleAcceptedEmailAddress (205) many of universities we support accepts provided email domain
 */

/**
 * @apiDefine UserNotInThisUniversity
 * @apiError UserNotInThisUniversity (206) current user is not member of requested university
 */

/**
 * @apiDefine InvalidEmailAddress
 * @apiError InvalidEmailAddress (207) not valid email address
 */

/**
 * @apiDefine InvalidEmailDomain
 * @apiError InvalidEmailDomain (208) not valid email domain
 */

/**
 * @apiDefine UnivAlreadyExisting
 * @apiError UnivAlreadyExisting (209) university with given name is already existing
 */

/**
 * @apiDefine InvalidPageNumberRequested
 * @apiError InvalidPageNumberRequested (250) requested page number is invalid
 */

/**
 * @apiDefine InvalidSortRequested
 * @apiError InvalidSortRequested (251) requested sort type is invalid
 */

/**
 * @apiDefine InvalidFilterRequested
 * @apiError InvalidFilterRequested (252) requested filter type is invalid
 */

/**
 * @apiDefine InvalidSearchFieldRequested
 * @apiError InvalidSearchFieldRequested (253) one of requested search field type is invalid
 */

/**
 * @apiDefine InvalidAgeRequested
 * @apiError InvalidAgeRequested (254) requested post age range is invalid
 */

/**
 * @apiDefine EmptyQueryStringRequested
 * @apiError EmptyQueryStringRequested (255) requested query string is empty
 */

/**
 * @apiDefine InvalidPerPageRequested
 * @apiError InvalidPerPageRequested (256) requested per page is invalid
 */

/**
 * @apiDefine PostNotFound
 * @apiError PostNotFound (400) Requested Post was not found on DB
 */

/**
 * @apiDefine CommentsOnPostGottenFailed
 * @apiError CommentsOnPostGottenFailed (401) fail to get comments on the post
 */

/**
 * @apiDefine UpdateVoteFailed
 * @apiError UpdateVoteFailed (402) fail to update votes on the post
 */

/**
 * @apiDefine GetPostsFailed
 * @apiError GetPostsFailed (403) failed to get posts
 */

/**
 * @apiDefine PostRemoveFailed
 * @apiError PostRemoveFailed (405) failed to remove post
 */

/**
 * @apiDefine PostAddedFailed
 * @apiError PostAddedFailed (406) fail to add the post
 */

/**
 * @apiDefine TitleOfPostIsInvalid
 * @apiError TitleOfPostIsInvalid (407) title of the post is continuum of whitespace and newline
 */

/**
 * @apiDefine TextOfPostIsInvalid
 * @apiError TextOfPostIsInvalid (408) text of the post is continuum group of whitespace and newline
 */

/**
 * @apiDefine PostVotedAlready
 * @apiError PostVotedAlready (409) the post is already voted by the user
 */

/**
 * @apiDefine UpdateVoteInDBFailed
 * @apiError UpdateVoteInDBFailed (410) update vote in DB failed
 */

/**
 * @apiDefine PostOwnerCanNotVote
 * @apiError PostOwnerCanNotVote (411) one who voted is the post owner
 */

/**
 * @apiDefine CommentNotFound
 * @apiError CommentNotFound (500) Requested comment was not found on DB
 */

/**
 * @apiDefine CommentRemovalFailed
 * @apiError CommentRemovalFailed (501) fail to remove the comment
 */

/**
 * @apiDefine CommentUpdateFailed
 * @apiError CommentUpdateFailed (502) fail to update the comment
 */

/**
 * @apiDefine CommentAddFailed
 * @apiError CommentAddFailed (503) failed to add comment
 */

/**
 * @apiDefine CommentReportFailed
 * @apiError CommentReportFailed (504) fail to report the comment
 */

/**
 * @apiDefine CommentReportAlready
 * @apiError CommentReportAlready (505) already report the comment
 */

/**
 * @apiDefine CommentOwnerCanNotVote
 * @apiError CommentOwnerCanNotVote (506) one who voted is the comment owner
 */

/**
 * @apiDefine AlreadyReported
 * @apiError AlreadyReported (600) user can only get reported once
 */

/**
 * @apiDefine AlreadyVoted
 * @apiError AlreadyVoted (601) user can only vote once
 */

/**
 * @apiDefine AddVoteFailed
 * @apiError AddVoteFailed (602) adding vote failed
 */

/**
 * @apiDefine AddReportFailed
 * @apiError AddReportFailed (603) adding report failed
 */

/**
 * @apiDefine EmptyComment
 * @apiError EmptyComment (604) comment does not have any text
 */

/**
 * @apiDefine EmptyVote
 * @apiError EmptyVote (605) need to vote
 */

/**
 * @apiDefine WrongVote
 * @apiError WrongVote (606) vote has to be either "up" or "down"
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

