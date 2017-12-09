'use strict';

var serveStatic = require('serve-static');

module.exports = function(app) {
  //app.use(this.config.root, serveStatic(this.public_dir));
  app.use('/', serveStatic(this.public_dir));
};
