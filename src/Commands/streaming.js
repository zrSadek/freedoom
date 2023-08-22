const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "streaming",
    description: "Set the activity as streaming",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 1
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as streaming !"})
        }, client.config.interval);
    }
}