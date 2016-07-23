"use strict";
var mocha = require('gulp-mocha'),
    Transpiler = require('./gulp-helper-babel'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    eslint = require('gulp-eslint'),
    gutil = require('gulp-util'),
    notify = require('node-notifier'),
    vinylPaths = require('vinyl-paths'),
    del = require('del'),
    _ = require('lodash'),
    spawn = require('child_process').spawn,
    Q = require('q'),
    promisePipe = require('promisepipe'),
    exec = Q.denodeify(require('child_process').exec),
    path = require('path');

var DEFAULT_OPTS = {
  files: ["*.js", "lib/**/*.js", "test/**/*.js", "!gulpfile.js", "!gulp-*.js"],
  transpile: true,
  transpileOut: "build",
  babelOpts: {},
  linkBabelRuntime: true,
  jscs: false,
  jshint: true,
  test: {
    files: ['${testDir}/**/*-specs.js', '!${testDir}/**/*-e2e-specs.js']
  },
  testReporter: ( process.env.TRAVIS || process.env.CI ) ? 'spec' : 'nyan',
  testTimeout: 8000,
  extraPrepublishTasks: [],
  preCommitTasks: ['jshint', 'once']
}

// string interpolation
var interpolate = function (s, opts) {
  return _.keys(opts).reduce(function (s, k) {
    return s.replace(new RegExp('\\$\\{\\s*' + k + '\\s*\\}', 'g') , opts[k]);
  }, s);
};

var handleError = function (err) {
  gutil.log(gutil.colors.red(err));
  var code = /\u001b\[(\d+(;\d+)*)?m/g;
  var notifErr = ('' + err).replace(code, '');
  notify('Build failure!', notifErr);
};

var boilerplate = function (gulp, opts) {
  var runSequence = Q.denodeify(require('run-sequence').use(gulp));
  opts = _.cloneDeep(opts);
  _.defaults(opts, DEFAULT_OPTS);
  
  // gulp clean !!
  gulp.task('clean', function () {
    if (opts.transpile) {
      return gulp.src(opts.transpileOut, {read: false})
                 .pipe(vinylPaths(del));
    }
  });
  
  var testDeps = [];
  var testTasks = [];
  var rootDir = '.';
  if (opts.transpile) {
    testDeps.push('transpile');
    rootDir = opts.transpileOut;
  }
  var fileAliases = { rootDir: rootDir, testDir: rootDir + '/test', libDir: rootDir + '/lib'};
  
  if (opts.test) {
    var testFiles = _.flatten([opts.test.files || opts.testFiles]).map(function (f) {
      return interpolate(f, fileAliases);
    });
    gulp.task('unit-test', testDeps, function () {
      var mochaOpts = {
        reporter: opts.testReporter,
        timeout: opts.testTimeout,
        'require': opts.testRequire || []
      };
      
      process.env._TESTING = 1;
      return gulp
        .src(testFiles, {read: false})
        .pipe(mocha(mochaOpts))
        .on('error', handleError);
    });
    testTasks.push('unit-test');
  }
  
  if (testTasks.length > 0) {
    gulp.task('test', function () {
      return runSequence.apply(null, testTasks);
    });
  }
  
  if (opts.transpile) {
    gulp.task('transpile', function () {
      var transpiler = new Transpiler(opts.babelOpts);
      return gulp.src(opts.files, {base: './'})
        .pipe(transpiler.stream())
        .on('error', handleError)
        .pipe(gulp.dest(opts.transpileOut));
    });
    
    gulp.task('prepublish', function () {
      var tasks = ['clean', 'transpile'].concat(opts.extraPrepublishTasks);
      return runSequence.apply(this, tasks);
    });
  }
  
  var lintTasks = [];
  if (opts.jscs) {
    gulp.task('jscs', function () {
      return gulp
        .src(opts.files)
        .pipe(jscs())
        .on('error', handleError);
    });
    lintTasks.push('jscs');
  }
  
  gulp.task('eslint', function () {
    return gulp.src(['**/*.js', '!node_modules/**', '!build/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
  
  if (opts.jshint) {
    gulp.task('jshint', function () {
      return gulp
        .src(opts.files)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .on('error', handleError);
    });
    lintTasks.push('jshint');
  }
  
  if (opts.jscs || opts.jshint) {
    opts.lint = true;
    gulp.task('lint', lintTasks);
  }
  

  var defaultSequence = [];
  if (opts.transpile) defaultSequence.push('clean');
  if (opts.lint) defaultSequence.push('lint');
  if (opts.transpile && !opts.test) defaultSequence.push('transpile');
  if (opts.postTranspile) defaultSequence = defaultSequence.concat(opts.postTranspile);
  if (opts.test) {
    defaultSequence.push('unit-test');
  }
  if (opts.extraDefaultTasks) defaultSequence = defaultSequence.concat(opts.extraDefaultTasks);


  gulp.task('once', function () {
    return runSequence.apply(null, defaultSequence);
  });

  gulp.task('default', ['once']);

  if (opts.preCommitTasks) {
    // this is a magic task that gets picked up by `git-guppy`
    // and automatically added as a pre-commit git hook
    gulp.task('pre-commit', opts.preCommitTasks);
  }
}


module.exports = {
  DEFAULTS: _.cloneDeep(DEFAULT_OPTS),
  use: function (gulp) {
    return function (opts) {
      boilerplate(gulp, opts);
    };
  }
};