const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "createwebhooks",
    description: "Create a lot of webhooks",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        const guild = message.guild
        if (!message.guild) return message.edit("Please use this command in a guild")
        message.delete()
        for(const channel of guild.channels.cache.map((x) => x) ) {
            channel.createWebhook("Freedoom")
            await sleep(1000)
        }      
    }
}