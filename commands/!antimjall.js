const Discord = require('discord.js');
exports.run = (client, message, args) => {
	if(message.guild.ownerID!==message.author.id) return message.channel.send("`no permission :v`")
	message.channel.send("***HE GOES***")
	var mbr = message.guild.members
	for (var [key, value] of mbr) {
	message.guild.members.get(key).setNickname("");
	}
}