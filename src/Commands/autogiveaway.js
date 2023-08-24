const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "autoparticipate",
    description: "Auto participate to giveaways",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        client.config.settings.autoParticipate = true

        if(args[0] == "off") client.config.settings.autoParticipate = false
        
        client.refresh()

        setTimeout(() => {
            message.edit({ content: `I will now participate automatically to giveaways`})
        }, client.config.interval);

        
    }
}