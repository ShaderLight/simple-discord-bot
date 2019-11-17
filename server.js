const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'
const ownerID = '266574440739897345'

client.on('message', message => {
	let args = message.content.slice(prefix.lenght).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	
	//cmd - komenda po prefiksie args- argumenty funkcji
	if (message.author.bot) return; //zakańcza funkcję jeżeli wiadomość napisał bot
	if (!message.content.startsWith(prefix)) return; //kończy funkcję jeżeli nie ma prefiksu
	
	//command handler
	try{
		
		delete require.cache[require.resolve(`./commands/${cmd}.js`)];
		
		let commandFile = require(`./commands/${cmd}.js`); //wymaga pliku z odpowiednią komendą
		commandFile.run(client, message, args); //przekazuje trzy zmienne do pliku z komendą
		
		
	} catch(e) { //wyłapuje błędy w komenczie i kodzie
		console.log(e.stack);
	}
});

//Ready - za każdym razem przy uruchomieniu
client.on('ready', () => console.log("Launched!"));
client.on('ready', () => client.user.setPresence({ game: {name:'!helperino'}, status:'idle'}));
//TOKEN
client.login("NTQ5MzMyMDg2NDMxOTQwNjU5.D1XHNw.wkt_Ryb3z8JqDbbVS0ReUkb96lU");