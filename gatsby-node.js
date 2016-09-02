var fs = require('fs-extra')
var path = require('path')

exports.modifyWebpackConfig = (config, env) => {
  return config
}

exports.postBuild = () => {
  // Copy favicons to public
  fs.copySync(path.join(__dirname, '/favicon'), path.join(__dirname, '/public/favicon'))
}
