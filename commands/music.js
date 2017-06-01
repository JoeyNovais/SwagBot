const Globals = require('../constantes.js');
const Utils = require('../utils.js');
const Commands = require('./commands.js');
module.exports = class music extends Commands {

    static match(message) {
        return (message.channel.name === Globals.musicChannel.name && !message.author.bot);
    }

    static action(message) {
        try {
            if (Globals.regExpLink.exec(message.content)) {
                if (!message.content.includes("youtube")) {
                    return Globals.musicChannel.send("Sorry, I can only take links from Youtube for now :( Blame Grokon for this !");
                }
                var currentChannel = Utils.isInVoiceChannel(message);
                if(currentChannel != null){
                  currentChannel.join()
                  .then(
                    /*function(connection){
                      connection.playConvertedStream(message.content);
                    }*/
                  )
                  .catch(
                    function(error){
                      console.log(error);
                    }
                  );
                } else{
                  message.reply("You are not in a voice channel :(");
                }
            }
        } catch (e) {
            console.log(e);
            Globals.musicChannel.send("Sorry, I couldn't recognize this as a link :( Blame Grokon for this !");
        }
    }
}
