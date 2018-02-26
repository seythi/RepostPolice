module.exports = {
	DISCORDKEY: {token: require('./secret.js')},
	JOINLINK: 'https://discordapp.com/oauth2/authorize?client_id=416659516470329376&scope=bot',
	PREFIX: '&',
	EXTENSIONS: ['jpg','jpeg','png','gif','webp'],
	DEBUG: 100,
	MONGOURI:'mongodb://localhost:27017',
	DBNAME:'repostPolice',
	MASTERCOLLECTION:'guilds',
}