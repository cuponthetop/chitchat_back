var through = require('through2'),
    EE = require('events').EventEmitter;

module.exports = function (pipeFn) {
  var inStream = through.obj();
  var outStream = pipeFn(inStream);
  var combinedStream = new EE();
  combinedStream.on('pipe', function (source) {
    source.unpipe(this);
    source.pipe(inStream);
  });
  combinedStream.pipe = function (dest, options) {
    return outStream.pipe(dest, options);
  };
  return combinedStream;
};