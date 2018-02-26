require('./src/initconfig');
const nconf = require('nconf');
const Discordie = require('Discordie');
var tlog = require('./src/util').tlog
const reposto = require('./src/reposto')
var client = new Discordie()


client.connect(nconf.get('DISCORDKEY'))



client.Dispatcher.on("GATEWAY_READY", e => {
  console.log("Connected as: " + client.User.username);
});



client.Dispatcher.on("MESSAGE_CREATE", e => {
if(e.message.author.bot) return;
  if (e.message.content == "ping")
    e.message.channel.sendMessage("pong");
else
{
	//contains image
	let atchlinks = [];
	let imglinks = []
	for(let i in e.message.attachments)
	{
		atchlinks.push(e.message.attachments[i].url)
	}
	let msglinks = e.message.content.match(generateFileRegex())
	imglinks = (atchlinks||[]).concat(msglinks||[])
	tlog(6, generateFileRegex().toString())
	tlog(6,'atch')
	tlog(6, atchlinks)
	tlog(6,'msg')
	tlog(6, msglinks)
	tlog(6, 'img')
	tlog(6, imglinks)
	if(imglinks && imglinks.length > 0)
	{
		reposto.repostForensics(e, imglinks)
	}
	//end contains image
}
});







function generateFileRegex()
{
	var file = 'http\\S+\\.(';
	var ext = nconf.get('EXTENSIONS');
	var e = 0;
	while(e < ext.length - 1)
	{
		file += ext[e]
		file += '|'
		e++
	}
	file += ext[e]
	file += ')'
	return new RegExp(file, 'gi')
}