define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Status Codes",
    "name": "StatusCodes",
    "group": "StatusCodes",
    "version": "0.0.0",
    "filename": "lib/app/route/status_all.js",
    "groupTitle": "StatusCodes",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownError",
            "description": "<p>(1) Unknown Error has occured! We are doomed!</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsufficientParameter",
            "description": "<p>(10) Supplied parameters were not sufficient forhandling request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>(102) User update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenMismatch",
            "description": "<p>(103) provided token mismatch</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserTokenAlreadyExpired",
            "description": "<p>(104) provided token is already expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyVerified",
            "description": "<p>(105) user already verified oneself</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyLoggedIn",
            "description": "<p>(112) user is trying to login but this userwas already logged in as an user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserLoggingOutWhenNotLoggedIn",
            "description": "<p>(113) user is trying to logout but this useris not logged in as any user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserCredentialsNotMatch",
            "description": "<p>(114) provided user credential is not correct</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotVerified",
            "description": "<p>(115) provided user is not yet verified</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserEmailAlreadyInUse",
            "description": "<p>(116) provided user email is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CantReportSelf",
            "description": "<p>(117) user cannot report oneself</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRemovalFailed",
            "description": "<p>(119) user removal failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmailSendFailed",
            "description": "<p>(119) sending email to user failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivNotFound",
            "description": "<p>(201) Requested University is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivUpdateFailed",
            "description": "<p>(202) University update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivRemovalFailed",
            "description": "<p>(203) University removal failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedEmailAddress",
            "description": "<p>(204) none of universities we support accepts provided email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MultipleAcceptedEmailAddress",
            "description": "<p>(205) many of universities we support accepts provided email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotInThisUniversity",
            "description": "<p>(206) current user is not member of requested university</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmailAddress",
            "description": "<p>(207) not valid email address</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmailDomain",
            "description": "<p>(208) not valid email domain</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnivAlreadyExisting",
            "description": "<p>(209) university with given name is already existing</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPageNumberRequested",
            "description": "<p>(250) requested page number is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidSortRequested",
            "description": "<p>(251) requested sort type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidFilterRequested",
            "description": "<p>(252) requested filter type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidSearchFieldRequested",
            "description": "<p>(253) one of requested search field type is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidAgeRequested",
            "description": "<p>(254) requested post age range is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyQueryStringRequested",
            "description": "<p>(255) requested query string is empty</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPerPageRequested",
            "description": "<p>(256) requested per page is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostNotFound",
            "description": "<p>(400) Requested Post was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsOnPostGottenFailed",
            "description": "<p>(401) fail to get comments on the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateVoteFailed",
            "description": "<p>(402) fail to update votes on the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetPostsFailed",
            "description": "<p>(403) failed to get posts</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostRemoveFailed",
            "description": "<p>(405) failed to remove post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostAddedFailed",
            "description": "<p>(406) fail to add the post</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TitleOfPostIsInvalid",
            "description": "<p>(407) title of the post is continuum of whitespace and newline</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextOfPostIsInvalid",
            "description": "<p>(408) text of the post is continuum group of whitespace and newline</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostVotedAlready",
            "description": "<p>(409) the post is already voted by the user</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UpdateVoteInDBFailed",
            "description": "<p>(410) update vote in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostOwnerCanNotVote",
            "description": "<p>(411) one who voted is the post owner</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>(500) Requested comment was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentRemovalFailed",
            "description": "<p>(501) fail to remove the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentUpdateFailed",
            "description": "<p>(502) fail to update the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAddFailed",
            "description": "<p>(503) failed to add comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentReportFailed",
            "description": "<p>(504) fail to report the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentReportAlready",
            "description": "<p>(505) already report the comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentOwnerCanNotVote",
            "description": "<p>(506) one who voted is the comment owner</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyReported",
            "description": "<p>(600) user can only get reported once</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AlreadyVoted",
            "description": "<p>(601) user can only vote once</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddVoteFailed",
            "description": "<p>(602) adding vote failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddReportFailed",
            "description": "<p>(603) adding report failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyComment",
            "description": "<p>(604) comment does not have any text</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyVote",
            "description": "<p>(605) need to vote</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WrongVote",
            "description": "<p>(606) vote has to be either &quot;up&quot; or &quot;down&quot;</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RateLimitExceeded",
            "description": "<p>(40004) Too many requests, please try again later.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldNotFetchCount",
            "description": "<p>(700) error when calling db</p>"
          }
        ]
      }
    }
  }
] });
