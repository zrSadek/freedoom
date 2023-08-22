const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "playing",
    description: "Set the activity as playing",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 0
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as playing !"})
        }, client.config.interval);
    }
}