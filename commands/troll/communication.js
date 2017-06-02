const Globals = require('../../constantes.js');
module.exports = class communication {
  static communication(message) {
    message.channel.send("<@" + Globals.trollOlma + "> Besoin d'un moyen de communication, j'ai ce qu'il te faut ! https://www.teamspeak.com/");
  }
}