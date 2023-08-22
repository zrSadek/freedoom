const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "setprefix",
    description: "Changes the prefix",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        if(!args[0]) return setInterval(() => {
            message.edit({ content: "You have to specify a prefifx"})
        }, client.config.interval);
        client.config.prefix = args[0]
        await client.refresh()
        
        setTimeout(() => {
            message.edit({ content: "Prefix changed to `" + client.config.prefix + "`."})
        }, client.config.interval);
    }
}