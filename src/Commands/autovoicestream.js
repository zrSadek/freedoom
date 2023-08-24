const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "autovoicestream",
    description: "Enable or disable the stream for autovoicechannel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
       
        client.config.settings.autoJoinVoiceChannel.stream = !client.config.settings.autoJoinVoiceChannel.stream
        client.refresh()
        client.refreshVoice()

        setTimeout(() => {
            message.edit({ content: "The stream will now be " + (client.config.settings.autoJoinVoiceChannel.stream ? "enabled" : "disabled")})
        }, client.config.interval);

        
    }
}