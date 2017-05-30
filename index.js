var Discord = require("discord.js");
var client = new Discord.Client();
var musicChannel;
var regExp =
    new RegExp("(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})");

client.on('ready', () => {
    musicChannel = client.channels.find('name', 'musique');
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.channel.name === musicChannel.name && !message.author.bot) {
        try {
            if (regExp.exec(message.content)) {
                if (!message.content.includes("youtube")) {
                    musicChannel.send("Sorry, I can only take links from Youtube for now :( Blame Grokon for this !")
                }
                musicChannel.send('this is a link.');
            }
        } catch (e) {
            musicChannel.send("Sorry, I couldn't recognize this as a link :( Blame Grokon for this !");
        }
    }
});

client.login("MzE5MDk1MTE0OTY4NTk2NDgw.DA8MnQ.avEaOO8VWAG11dVe6qmngJHFUUY");
