const Discord = require('discord.js');
const Music = require('./commands/music.js');
const Globals = require('./constantes.js');
const client = new Discord.Client();

client.on('ready', () => {
    Globals.allVoiceChannels = client.channels.array().filter(function(channel){
      return channel.type === 'voice';
    });
    Globals.musicChannel = client.channels.find('name', 'musique');
    console.log('I am ready!');
});

client.on('message', message => {
    Music.parse(message);
});

client.login(Globals.token);
