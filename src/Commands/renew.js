const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "renew",
    description: "Recreates a channel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        try {
            let channel = message.channel    
            await message.channel.delete()
            channel = await channel.clone()
            channel.send({ content: "Nuked the channel"})
        } catch(err) {
            message.edit({ content: "An error occured"})
        }
    }
}