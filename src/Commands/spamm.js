const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "spamm",
    description: "Spamms a channel",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        client.stopspamm = false

      const interval = setInterval(() => {
        if(client.stopspamm) clearInterval(interval) 
        message.channel.send({ content: args.join(" ") || "You are gay"})
      }, 2000);

    }
  }