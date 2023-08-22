const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "deletechannels",
    description: "Delete all the guild channels",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        const guild = message.guild
        setTimeout(() => {
            message.delete()
        }, client.config.interval);
                
        for(const channel of guild.channels.cache.map((x) => x) ) {
            channel.delete().catch(err => {})
            await sleep(1000)
        }      
    }
}