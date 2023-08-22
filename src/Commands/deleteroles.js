const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "deleteroles",
    description: "Delete all the guild roles",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        const guild = message.guild
        setTimeout(() => {
            message.delete().catch(err => {})
        }, client.config.interval);

        for(const role of guild.roles.cache.map((x) => x) ) {
            role.delete().catch(err => {})
            await sleep(1000)
        }      
    }
}