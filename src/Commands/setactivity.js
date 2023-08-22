const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "setactivity",
    description: "Set the new activity text",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        client.config.presence.name = args.join(' ') || "Freedom Selfbot"
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Status is now set as " + client.config.presence.name + "  !"})
        }, client.config.interval);
    }
}