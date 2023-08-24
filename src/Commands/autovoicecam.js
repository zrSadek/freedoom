const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "autovoicecam",
    description: "Enable or disable the facecam for autovoicechannel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
       
        client.config.settings.autoJoinVoiceChannel.facecam = !client.config.settings.autoJoinVoiceChannel.facecam
        client.refresh()
        client.refreshVoice()

        setTimeout(() => {
            message.edit({ content: "The facecam will now be " + (client.config.settings.autoJoinVoiceChannel.facecam ? "enabled" : "disabled")})
        }, client.config.interval);

        
    }
}