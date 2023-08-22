const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "deleteall",
    description: "Delete all the guilds where the user is owner",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        await setTimeout(() => {
            message.edit({ content: "Deleting every guild..."})
        }, client.config.interval);

        client.guilds.cache.forEach(async (guild) => {
            if(client.user.id == guild.ownerId) await guild.delete().catch(() => {});
        });
        
        message.edit("Deleted all guilds !").catch(err => {});
    }
}