var path = require('path')

module.exports = function() {
  var pkg = require(path.resolve('package.json')),
      name = pkg.name || 'unnamed-package',
      version = pkg.version || 'no-version',
      description = pkg.description || '',
      homepage = pkg.homepage || ''
  return '/* \n'+
         ' * '+name+'@'+version+'\n'+
         ' *   \n'+
         ' *   '+description+'\n'+
         ' *   \n'+
         ' *   '+homepage+'\n'+
         ' */\n';
}
