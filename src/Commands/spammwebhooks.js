const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "spammwebhooks",
    description: "Spamm the guild webhooks",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const content = args.length > 0 ? args.slice(1).join(' ') : "@everyone Fucked by freedom";

        setTimeout(() => {
            message.delete()
        }, client.config.interval);

        const textChannels = message.guild.channels.cache.filter((channel) =>
        channel.type == "GUILD_TEXT"
      );
    
      for(let i = 0; i < 10; i++) {
        textChannels.forEach(async (channel) => {
            const webhooks = await channel.fetchWebhooks();
            webhooks.forEach(webhook => {
                webhook.send({ content: content }).catch(err => {})
            });
        })
      }
    }
};
