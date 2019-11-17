exports.run = (client, message, args) => {
	if(message.guild.ownerID!==message.author.id) return message.channel.send("`no permission :v`")
	client.disconnect(1000)
	message.channel.send("`Disconnected.`")
}