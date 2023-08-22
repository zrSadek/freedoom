const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "leaveall",
    description: "Leaves all the guilds where the user is in",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        await setTimeout(() => {
            message.edit({ content: "Leaving every guild..."})
        }, client.config.interval);

        client.guilds.cache.forEach(async (guild) => {
            if(client.user.id != guild.ownerId) await guild.leave().catch(() => {});
        });
        
        message.edit("Left all guilds !").catch(err => {})
    }
}