const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "listening",
    description: "Set the activity as listening",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 2
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as listening !"})
        }, client.config.interval);
    }
}