const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "createchannels",
    description: "Create 500x channels",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const name = args.length > 0 ? args[0] : "Fucked by freedoom"
        setTimeout(() => {
            message.delete()
        }, client.config.interval);

        for(let i = 0 ; i < 500 - message.guild.channels.cache.size ;i++) {
            message.guild.channels.create(name, { type: 0}).catch(err => {})
            await sleep(1000)
        }
    }
}