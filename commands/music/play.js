const youtubeStream = require('youtube-audio-stream');
const Globals = require('../../constantes.js');
const Utils = require('../../utils.js');

module.exports = class play {
  static play(message) {
    try {
      console.log(message);
      if (Globals.regExpLink.exec(message.content)) {
        if (!message.content.includes("youtube")) {
          return Globals.musicChannel.send("Sorry, I can only take links from Youtube for now :( Blame Grokon for this !");
        }
        var currentChannel = Utils.isInVoiceChannel(message);
        if (currentChannel != null) {
          currentChannel.join()
            .then(
              function(connection) {
                connection.playStream(youtubeStream(message.content))
                  .on('end', function() {
                    connection.disconnect();
                  });
              }
            )
            .catch(
              function(error) {
                console.log(error);
              }
            );
        } else {
          message.reply("You are not in a voice channel :(");
        }
      }
    } catch (e) {
      console.log(e);
      Globals.musicChannel.send("Sorry, I couldn't recognize this as a link :( Blame Grokon for this !");
    }
  }
}
