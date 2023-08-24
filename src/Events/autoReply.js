const Selfbot = require("../Classes/selfbot");
const { Message } = require("djs-selfbot-v14")

module.exports = {
    name: "messageCreate",
    /**
     * 
     * @param {Selfbot} client 
     * @param {Message} message 
     * @returns 
     */
    async execute(client, message) {
        if(message.author.bot) return; 
        if(!client.config.settings.autoReply) return;
        if(message.mentions.users.get(client.user.id)) return message.reply({ content: client.config.settings.autoReply })

    }
}