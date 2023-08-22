const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "stopspamm",
    description: "Stop the spamm a channel",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        client.stopspamm = true

        setInterval(() => {
            message.edit({ content: "Stopped spamm"})
        }, client.config.interval);
    }
  }