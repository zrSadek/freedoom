const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "watching",
    description: "Set the activity as watching",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 3
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as watching !"})
        }, client.config.interval);
    }
}