const nconf = require('nconf');
exports.tlog = function(lvl, msg)
{
	if(nconf.get('DEBUG') >= lvl)
	{
		console.log(msg)
	}
}