"use strict";

var gulp = require('gulp'),
    path = require('path'),
    boilerplate = require('./util/gulp-helper-boilerplate').use(gulp),
    fs = require('fs');
    
boilerplate({
  test: {
    files: ['${testDir}/**/*-specs.js']
  }
});