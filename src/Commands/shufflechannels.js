const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "shuffle",
    description: "Shuffles the guild channels",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {

        setTimeout(() => {
            message.edit({ contennt: "Shuffling the channels"})
        }, client.config.interval);

        message.guild.channels.cache.forEach(async channel => {
            await channel.setPosition(Math.floor(Math.random() * (message.guild.channels.cache.size - 0 + 1) + 0)).catch((err) => {})
        })

        setTimeout(() => {
            message.edit({ contennt: "Shuffled the channels !"})
        }, client.config.interval);
    }
}