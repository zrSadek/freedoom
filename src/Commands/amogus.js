const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "amogus",
    description: "among us what ya doing",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        setTimeout(() => {
            message.edit({ content: "https://giphy.com/gifs/77lYP6fRvXjwMGKXEY"})
        }, client.config.interval);
        
    }
}