const Selfbot = require("../Classes/selfbot");
const fs = require("fs")

module.exports = {
    name: "refresh",
    description: "Refresh your presence",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        client.refresh()

        setTimeout(() => {
            message.edit({ content: "Refreshed presence "})
        }, client.config.interval);
    }
}