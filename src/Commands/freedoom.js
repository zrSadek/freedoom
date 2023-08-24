const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "freedoom",
    description: "Be free !",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        setTimeout(() => {
            message.edit({ content: "https://discord.gg/kMGcHDCNfZ"})
        }, client.config.interval);
    }
}