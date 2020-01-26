const Discord = require('discord.js'); 
const client = new Discord.Client();  

client.on('ready', () => {   
  console.log(`Logged in as ${client.user.tag}!`); 
});

client.on('message', msg => {  
  if (msg.content === 'ping') {     
    msg.reply('Pong!'); 
  } 
  if (msg.content === 'right turn clyde') {
    msg.react('🤜');
  }
});

// Check that the auth token is defined as an env var
if(process.env.DISCORD_BOT_TOKEN){
  console.log('auth token defined, continuing')
} else {
  console.log('auth token missing')
}

client.login(process.env.DISCORD_BOT_TOKEN);
