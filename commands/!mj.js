const Discord = require('discord.js');
exports.run = (client, message, args) => {
	message.guild.members.get(message.author.id).setNickname("Michael Jackson");
	message.channel.send("***The king of pop is still with us***")
}