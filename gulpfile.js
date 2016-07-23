"use strict";

var gulp = require('gulp'),
    path = require('path'),
    boilerplate = require('./gulp-helper-boilerplate').use(gulp),
    fs = require('fs');
    
boilerplate({
  test: {
    files: ['${testDir}/**/*-specs.js']
  }
});    