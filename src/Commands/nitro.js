const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "nitro",
    description: "Generates an unchecked discord nitro",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {

        var resultado = '';
        var caracters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var quantidade_caracters = caracters.length;
        for ( var i = 0; i < 24; i++ ) {
          resultado += caracters.charAt(Math.floor(Math.random() * 
     quantidade_caracters));
       }

      setTimeout(() => {
        message.edit({ content: "discord.gift/" + resultado })
        }, client.config.interval);
      
    }
  }