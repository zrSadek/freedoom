const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "refreshvoice",
    description: "Refresh auto join voice channel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {

        await client.refreshVoice()

        setTimeout(() => {
            message.edit({ content: "Refreshed auto join voice channel"})
        }, client.config.interval);
        
    }
}