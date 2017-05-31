const Globals = require('./constantes.js');
module.exports = class utils{
  static isInVoiceChannel(message){
      var chan = Globals.allVoiceChannels.find(function(channel){
        if(channel.members != undefined){
          return channel.members.array().find(function(member){
            return member.user.id == message.author.id;
          });
        }
        return false;
      });
      return chan;
  }
}
