"use strict";

import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import { endLogFormatter, startLogFormatter, logger } from './logger';
import 'errorhandler';
import { connect as connectMongo } from './db-helper';

function allowCrossDomain (req, res, next) {
  try {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');

    // need to respond 200 to OPTIONS
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  } catch (err) {
    log.error(`Unexpected error: ${err.stack}`);
    next();
  }
}

export default async function (app, env) {

  await connectMongo();

  // 환경 변수 셋팅
  app.set('env', env.NODE_ENV || 'development');
  app.set('port', env.PORT || 5001);

  // 패킷 로거
  app.use(endLogFormatter);

  // 크로스 오리진 액세스
  app.use(allowCrossDomain);

  // 바디파서, 메서드오버라이드 
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(methodOverride());

  // dev 일때 에러 스택 트레이스
  if ('development' === env.NODE_ENV) {
    app.use(errorhandler());
  }

  // 패킷 로깅
  app.use(startLogFormatter);

  // 다음 부터는 서버 라우트들..
};
