const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "nigga",
    description: "black watermelon",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        setTimeout(() => {
            message.edit({ content: "https://media.discordapp.net/attachments/1007755589901897819/1078489746600382574/a96d0fad74ce91c9129c27ce685accec-gif.gif?width=320&height=396"})
        }, client.config.interval);
        
    }
}