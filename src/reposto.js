const Promise = require('bluebird');
const hasher = Promise.promisify(require('image-hash'));
const nconf = require('nconf');
var tlog = require('./util').tlog;

exports.repostForensics = function(e, imglinks)
{
	let hashes = [];
	for (let i in imglinks)
	{
		hashes.push([imglinks[i],hasher(imglinks[i], 16, true)])
	}
	Promise.all(hashes).then((rhashes)=>
	{
		tlog(10,rhashes);
		


	}).catch((err)=>
	{
		console.log(err)
	})
}

const pollReposts = function(e, db, imglinks, cb)
{
	let guildID = e.message.guild.id
	tlog(9,guildID)
}