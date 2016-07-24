# API Server for 사당행

## Status
[![Build Status](https://travis-ci.org/cuponthetop/chitchat_back.png)](https://travis-ci.org/cuponthetop/chitchat_back)

## API Documentation
Documentation can be found [here](http://cuponthetop.github.io/chitchat_back/).

## 디렉토리 및 파일 설명

```
build/          ... 빌드 완료된 코드들 실행은 이걸로 시켜야 에러 안남
config/         ... 설정 파일들
lib/            ... API 서버 관련 실제 es7 코드들
  app/          ... 서버 관련 코드
    controller/ ... API 라우트의 핸들 함수와 기타 함수들
    model/      ... mongodb 관련 mongoose 모델
    route/      ... API 서버의 API 라우팅 관련 로직 
    server/     ... API 서버의 로직
      logger    ... 로깅
      response  ... respond 센더 
      server    ... 서버 엔트리 포인트
      status    ... response status 정의
  test/         ... 테스트 코드가 들어갈 부분
    api/        ... api의 E2E 테스트
    helper/     ... 테스트 관련 헬퍼 함수
    init/       ... 테스트 실행 조건 초기화를 위한 데이터 정리 및 삽입
    unit/       ... 기능 단위의 유닛 테스트
util/           ... gulp-helpers, publish-apidoc 등 유틸리티

.gitignore      ... git ignore list
.npmignore      ... npm publish ignore list
.jshintingore   ... jshint ignore list
.jshintrc       ... jshint 검사 규칙
.travis.yml     ... travis 관련 yaml 설정 파일
gulpfile.js     ... gulp task들을 정의한 스크립트   
package.json    ... 노드 프로젝트 설정 파일 
README.md       ... 현재 읽고 있는 파일
```

## 개발 환경 설정

해당 레포지토리 클론 하시고 (git clone git@github.com:cuponthetop/chitchat_back.git)

cd chitchat_back

publish-apidoc:
프로젝트의 루트 디렉토리에서
apidoc을 실행시켜 문서를 만들고, 깃허브의 gh-pages 브랜치에 푸시해요

## 테스트 환경 설정
- 테스트 DB에 데이터 넣기
node build/test/init/test-init.js
- 테스트 데이터로 서버 띄우기
node build/server.js