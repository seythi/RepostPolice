const fs = require('fs');
const nconf = require('nconf');
const path = require('path');


// Config
nconf.use('memory');
nconf.argv().env();

const config_path = path.join(__dirname, '../config.js');
if (fs.existsSync(config_path)) {
  nconf.defaults(require(config_path));
}