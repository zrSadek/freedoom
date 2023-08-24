const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "afk",
    description: "Auto replies",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const name = args.length > 0 ? args.join(" ") : "I'm currently afk"
        client.config.settings.autoReply = name

        if(args[0] == "off") client.config.settings.autoReply = null

        client.refresh()
        setTimeout(() => {
            message.edit({ content: `Autoreply message set to:${client.config.settings.autoReply} `})
        }, client.config.interval);

        
    }
}