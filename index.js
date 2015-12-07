var through = require('through2')
var buildHeader = require('./lib/build-header')

module.exports = function (bundler, opts) {
  var alreadyWritten = false
  bundler.pipeline.get('wrap').push(through.obj(function (row, enc, next) {
    if(!alreadyWritten) {
      this.push(new Buffer(buildHeader()))
      alreadyWritten = true
    }
    next(null, row)
  }))
}
