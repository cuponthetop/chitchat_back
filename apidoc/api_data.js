define({ "api": [
  {
    "type": "post",
    "url": "/chatrooms",
    "title": "add chatroom",
    "name": "AddChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":userId",
            "description": "<p>Chatroom's participants unique ID Array.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetGender",
            "description": "<p>Chatroom's target gender(Male or Female or Both)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":dramaId",
            "description": "<p>Chatroom's drama unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IPv4 Address with Port</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isUp",
            "description": "<p>Chatroom is exist or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomAddFailed",
            "description": "<p>(303) fail to add the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddTextToChatroomFailed",
            "description": "<p>(312) fail to add the text to the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsertTextInDBFailed",
            "description": "<p>(314) insert text in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyText",
            "description": "<p>(315) Text does not have any comment</p>"
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
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/chatrooms/:chatroomId",
    "title": "Get individual chatroom",
    "name": "GetChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "owner"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomNotFound",
            "description": "<p>(301) Requested chatroom is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetChatroomsFailed",
            "description": "<p>(302) failed to get chatrooms</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MembersOfChatroomGottenFailed",
            "description": "<p>(306) fail to get members on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberEnterChatroomFailed",
            "description": "<p>(307) fail to enter the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberLeaveFailed",
            "description": "<p>(308) fail to leave the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberPermissionNotAllowed",
            "description": "<p>(309) This chatroom is not allowed for member of different target gender or in not loged</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedAddress",
            "description": "<p>(310) This chatroom is not allowed for suspended member</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextsInChatroomGottenFailed",
            "description": "<p>(311) fail to get texts on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextNotFound",
            "description": "<p>(313) Requested text was not found on DB</p>"
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
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "chatrooms/:chatroomId",
    "title": "Remove chatroom information",
    "name": "RemoveChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomRemoveFailed",
            "description": "<p>(305) fail to remove the chatroom</p>"
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
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "chatrooms/:chatroomId",
    "title": "Update chatroom information",
    "name": "UpdateChatroom",
    "group": "Chatroom",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Chatroom's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":userId",
            "description": "<p>Chatroom's participants unique ID List.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetGender",
            "description": "<p>Chatroom's target gender(Male or Female or Both)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":dramaId",
            "description": "<p>Chatroom's drama unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IPv4 Address with Port</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isUp",
            "description": "<p>Chatroom is exist or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/chatroom.js",
    "groupTitle": "Chatroom",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomUpdateFailed",
            "description": "<p>(304) fail to update the chatroom</p>"
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
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/dramas/:did",
    "title": "Create Drama Information",
    "name": "CreateDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date[]",
            "optional": false,
            "field": "airTime",
            "description": "<p>Drama's air-time List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":channelId",
            "description": "<p>Drama's Channel ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":categoryId",
            "description": "<p>Drama's Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Drama's Chatrooms ID List</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "DramaCreateFailed",
            "description": "<p>(903) Drama create failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/dramas/:did",
    "title": "Get Drama Information",
    "name": "GetDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "user"
      },
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "DramaNotFound",
            "description": "<p>(901) Requested Drama was not found on DB</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/dramas/:did",
    "title": "Remove Drama Information",
    "name": "RemoveDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>drama's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "DramaRemovalFailed",
            "description": "<p>(904) Drama remove failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/dramas/:did",
    "title": "Update Drama Information",
    "name": "UpdateDrama",
    "group": "Drama",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":did",
            "description": "<p>Drama's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Parameter",
            "type": "Date[]",
            "optional": false,
            "field": "airTime",
            "description": "<p>Drama's air-time List</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":channelId",
            "description": "<p>Drama's Channel ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":categoryId",
            "description": "<p>Drama's Category ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": ":chatroomId",
            "description": "<p>Drama's Chatrooms ID List</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/drama.js",
    "groupTitle": "Drama",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>Drama Information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>Drama ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Date[]",
            "optional": false,
            "field": "value.airTime",
            "description": "<p>When Drama is being broadcasted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.title",
            "description": "<p>Drama's title</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "value.channel",
            "description": "<p>Drama's Channel Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.chatrooms",
            "description": "<p>List of Drama's Chatrooms</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.category",
            "description": "<p>Drama's category</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "DramaUpdateFailed",
            "description": "<p>(902) Drama update failed</p>"
          }
        ]
      }
    }
  },
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
            "field": "AlreadyReported",
            "description": "<p>(600) user can only get reported once</p>"
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
            "field": "ChatroomNotFound",
            "description": "<p>(301) Requested chatroom is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GetChatroomsFailed",
            "description": "<p>(302) failed to get chatrooms</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomAddFailed",
            "description": "<p>(303) fail to add the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomUpdateFailed",
            "description": "<p>(304) fail to update the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomRemoveFailed",
            "description": "<p>(305) fail to remove the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MembersOfChatroomGottenFailed",
            "description": "<p>(306) fail to get members on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberEnterChatroomFailed",
            "description": "<p>(307) fail to enter the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberLeaveFailed",
            "description": "<p>(308) fail to leave the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberPermissionNotAllowed",
            "description": "<p>(309) This chatroom is not allowed for member of different target gender or in not loged</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAcceptedAddress",
            "description": "<p>(310) This chatroom is not allowed for suspended member</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextsInChatroomGottenFailed",
            "description": "<p>(311) fail to get texts on the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddTextToChatroomFailed",
            "description": "<p>(312) fail to add the text to the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TextNotFound",
            "description": "<p>(313) Requested text was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsertTextInDBFailed",
            "description": "<p>(314) insert text in DB failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyText",
            "description": "<p>(315) Text does not have any comment</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaNotFound",
            "description": "<p>(901) Requested Drama was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaUpdateFailed",
            "description": "<p>(902) Drama update failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaCreateFailed",
            "description": "<p>(903) Drama create failed</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DramaRemovalFailed",
            "description": "<p>(904) Drama remove failed</p>"
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
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "name": "CreateUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
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
            "field": "UserEmailAlreadyInUse",
            "description": "<p>(116) provided user email is already in use</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/users/:uid",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      },
      {
        "name": "owner"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserRemovalFailed",
            "description": "<p>(119) user removal failed</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:uid/enter/:chatroomid",
    "title": "Enter Specified Chatroom",
    "name": "EnterChatroom",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":chatroomid",
            "description": "<p>Chatroom's ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "ChatroomNotFound",
            "description": "<p>(301) Requested chatroom is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChatroomUpdateFailed",
            "description": "<p>(304) fail to update the chatroom</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemberEnterChatroomFailed",
            "description": "<p>(307) fail to enter the chatroom</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users/:uid",
    "title": "Get User Information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.nickname",
            "description": "<p>User nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.gender",
            "description": "<p>User gender (male or female)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.likedDrama",
            "description": "<p>List of Dramas User liked</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "value.joinedChatroom",
            "description": "<p>List of Chatrooms User has joined</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value.email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "value.birthday",
            "description": "<p>User birthday</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "value.numReported",
            "description": "<p>User Reported Count</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get All Users",
    "name": "GetUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserPermissionNotAllowed",
            "description": "<p>(106) permission current user posesses is not enough to perform selected action</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:uid/like/:dramaid",
    "title": "Like Specified Drama",
    "name": "LikeDrama",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":dramaid",
            "description": "<p>Drama ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "DramaNotFound",
            "description": "<p>(901) Requested Drama was not found on DB</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:uid/report",
    "title": "Report User",
    "name": "ReportUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID to report</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
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
            "field": "CantReportSelf",
            "description": "<p>(117) user cannot report oneself</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/users/:uid",
    "title": "Update User Information",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": ":uid",
            "description": "<p>User's unique ID</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      },
      {
        "name": "owner"
      }
    ],
    "version": "0.0.0",
    "filename": "lib/app/route/v1/user.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>status of request</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAuthRequired",
            "description": "<p>(111) user authentication is required</p>"
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
            "field": "UserNotFound",
            "description": "<p>(101) Requested User was not found on DB</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserUpdateFailed",
            "description": "<p>(102) User update failed</p>"
          }
        ]
      }
    }
  }
] });
