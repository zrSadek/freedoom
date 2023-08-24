module.exports = {
    name: "messageReactionAdd",
    async execute(client, messageReaction, user) {
        if(!client.config.settings.autoParticipate) return;
        if(messageReaction.embeds?.[0]?.title.toLowerCase().includes("giveaway") || messageReaction.embeds?.[0]?.fields[0]?.name?.toLowerCase().includes("giveaway")) {
            messageReaction.message.react(!isNaN(parseInt(messageReaction.id)) ? messageReaction._emoji.id : messageReaction._emoji.name)
        }        
    }
}