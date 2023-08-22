const Selfbot = require("../Classes/selfbot");
const fs = require("fs")

module.exports = {
    name: "competing",
    description: "Set the activity as competing",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.type = 5
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Activiy is now set as competing !"})
        }, client.config.interval);
    }
}