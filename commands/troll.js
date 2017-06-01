const Globals = require('../constantes.js');
const Commands = require('./commands.js');
module.exports = class troll extends Commands {

    static match(message) {
        if(message.content.includes("caddy")) {
            this.troll = Globals.trollEukray;
            return (!message.author.bot);
        } else if (message.content.includes("ptikon")) {
            this.troll = Globals.trollFudo;
            return (!message.author.bot);
        } else if (message.content.includes("grokon")) {
            this.troll = Globals.trollThorgrim;
            return (!message.author.bot);
        } else if (message.content.includes("communication")) {
            this.troll = Globals.trollOlma;
            return (!message.author.bot);
        } else if (message.content.includes("code diokko")) {
            this.troll = Globals.trollDiakka;
            return (!message.author.bot);
        } else if (message.content.includes("dps")) {
            this.troll = Globals.trollXugan;
            return (!message.author.bot);
        } else if (message.content.includes("collyre")) {
            this.troll = Globals.trollZhatra;
            return (!message.author.bot);
        }
        return false;
    }

    static action(message) {
      switch(this.troll){
        case Globals.trollEukray:
          message.channel.send("<@"+Globals.trollEukray+"> ? *troll troll troll*");
        break;
        case Globals.trollFudo:
          message.channel.send("<@"+Globals.trollFudo+"> ? *troll troll troll*");
        break;
        case Globals.trollThorgrim:
          message.channel.send("<@"+Globals.trollThorgrim+"> ? *troll troll troll*");
        break;
        case Globals.trollOlma:
          message.channel.send("<@"+Globals.trollOlma+"> Besoin d'un moyen de communication, j'ai ce qu'il te faut ! https://www.teamspeak.com/");
        break;
        case Globals.trollDiakka:
          message.channel.send("<@"+Globals.trollDiakka+"> https://www.youtube.com/watch?v=2k0lO1x1UCc");
        break;
        case Globals.trollXugan:
          message.channel.send("Vous avez dit dps ? J'en connais un bon ! #28M <@"+Globals.trollXugan+">");
        break;
        case Globals.trollZhatra:
          message.channel.send("<@"+Globals.trollZhatra+"> https://fr.wikipedia.org/wiki/Collyre");
        break;
        default:
        break;
      }
    }
}
