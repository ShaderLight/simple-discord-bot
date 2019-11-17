exports.run = (client, message, args) => {
	message.channel.send('***Server member count:  ***`'+message.guild.memberCount+"`")
}