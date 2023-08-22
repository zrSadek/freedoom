const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "custom",
    description: "Set the activity as custom",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 4
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as custom !"})
        }, client.config.interval);
    }
}