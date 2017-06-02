const Globals = require('../../constantes.js');
module.exports = class ptikon {
  static ptikon(message) {
    message.channel.send("<@" + Globals.trollFudo + "> ? *troll troll troll*");
  }
}