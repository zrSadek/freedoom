const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "ping",
    description: "Pong !",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        setTimeout(() => {
            message.edit({ content: "🏓 Pong ! My latency is " + client.ws.ping + "ms !"})
        }, client.config.interval);
    }
}