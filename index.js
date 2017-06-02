const Discord = require('discord.js');
const Play = require('./commands/music/play.js');
const Stop = require('./commands/music/stop.js');
const _20M = require('./commands/troll/20M.js');
const Caddy = require('./commands/troll/caddy.js');
const Codediokko = require('./commands/troll/codediokko.js');
const Collyre = require('./commands/troll/collyre.js');
const Communication = require('./commands/troll/communication.js');
const Grokon = require('./commands/troll/grokon.js');
const Ptikon = require('./commands/troll/ptikon.js');
const Globals = require('./constantes.js');
const fs = require('fs');
const client = new Discord.Client();

client.on('ready', () => {
  Globals.allVoiceChannels = client.channels.array()
    .filter(function(channel) {
      return channel.type === 'voice';
    });
  Globals.musicChannel = client.channels.find('name', 'musique');
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.author.bot) {
    let manifests = fs.readdirSync('./manifests', 'utf8');
    manifests.some((manifest) => {
      let man = JSON.parse(fs.readFileSync('./manifests/' + manifest, 'utf8'));
      man.Commands.some((command) => {
        if (command.KeyWords.includes(message.content.toLowerCase())) {
          let func = command.Name;
          global[func](message);
          return true;
        }
        return false;
      });
    });
  }
});

client.login(Globals.token);
