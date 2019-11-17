// This episode will be going over the Urbandictionary command, it also requires 2 packages
const urban = require('relevant-urban'), // This is for fetching results
  Discord = require('discord.js'); // This is for forming embeds

// We can call our command handler here
exports.run = async (client, message, args, tools) => {
  // First, we need to verify that they wrote text
  if (!args[0]) return message.channel.send(`***give me text >:c***`);
  // This will return and send a message, (args[0] is the first word after the command)

  // Now, we can fetch the word from Urbandictionary
  let res = await urban(args.join(' ')).catch(e => { // This uses await, so the response will be held in the `res` variable
    // Although, if an error is found (word not found), this .catch() will run
    return message.channel.send('***no results :c***');
  });
  if(res.word==undefined) return message.channel.send("");
  message.channel.send('***'+res.word+"***\n\n`"+res.definition+"\n\n"+res.example+"`")
  

}