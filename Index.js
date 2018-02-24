require('./src/initconfig');
const nconf = require('nconf');
const Discordie = require('Discordie');
const Hasher = require('image-hash');
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
	//e.message.channel.sendMessage('```' + e.message.content + '```')
	let atchlinks = [];
	let imglinks = []
	for(let i in e.message.attachments)
	{
		atchlinks.push(e.message.attachments[i].url)
	}
	let msglinks = e.message.content.match(generateFileRegex())
	imglinks = atchlinks.concat(msglinks)
	console.log(generateFileRegex().toString())
	console.log('atch')
	console.log(atchlinks)
	console.log('msg')
	console.log(msglinks)
	console.log('img')
	console.log(imglinks)

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