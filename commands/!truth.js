const { Client, Attachment } = require('discord.js');
exports.run = (client, message, args) => {

	const atta = new Attachment('https://pbs.twimg.com/profile_images/1077978166302556161/e7T0cet3_400x400.jpg');
        // Send the attachment in the message channel
			message.channel.send(atta);
}