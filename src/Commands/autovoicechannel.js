const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "autovoicechannel",
    description: "Joins a voice channel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        let channel;
        
        if(args[0] && client.channels.cache.get(args[0])) {
            channel = args[0]
        } else if(args[0]) {
            channel = false
        } else {
            return setTimeout(() => {
                message.edit("Invalid argument ! You must specify a channel id or 'off'")
            }, client.config.interval);
        }

        client.config.settings.autoJoinVoiceChannel.channel = channel
        client.refresh()
        client.refreshVoice()

        setTimeout(() => {
            message.edit({ content: channel ? "I will now automatically join that voice channel" : `I will now stop joining the voice channel`})
        }, client.config.interval);

        
    }
}