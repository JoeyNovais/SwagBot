var Discord = require("discord.js");
var client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login("MzE5MDk1MTE0OTY4NTk2NDgw.DA8MnQ.avEaOO8VWAG11dVe6qmngJHFUUY");
