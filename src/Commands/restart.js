const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "restart",
    description: "Restarts !",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        await setTimeout(() => {
            message.edit({ content: "Restarting..."})
        }, client.config.interval);

        const token = client.config.token
        client.destroy()
        client.login(token)


        await setTimeout(() => {
            message.edit({ content: "Restarted !"})
        }, client.config.interval);
    }
}