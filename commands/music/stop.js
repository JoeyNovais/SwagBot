const youtubeStream = require('youtube-audio-stream');
const Globals = require('../../constantes.js');
const Utils = require('../../utils.js');

module.exports = class stop {
  static stop(message) {
    try {
      var currentChannel = Utils.isInVoiceChannel(message);
      if (currentChannel != null) {
        currentChannel.leave();
      }
    } catch (e) {
      console.log(e);
      Globals.musicChannel.send("But I don't wanna leave you ! :'()'");
    }
  }
}