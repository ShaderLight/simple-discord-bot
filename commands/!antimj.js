const Discord = require('discord.js');
exports.run = (client, message, args) => {
	message.guild.members.get(message.author.id).setNickname(message.author.username);
	message.channel.send("***The king of pop has gone***")
}