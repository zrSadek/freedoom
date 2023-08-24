module.exports = {
    name: "messageCreate",
    async execute(client, message) {
        if(messageReaction.embeds?.[0]?.title.toLowerCase().includes("giveaway") || messageReaction.embeds?.[0]?.fields[0]?.name?.toLowerCase().includes("giveaway")) {
            message.clickButton()
        }
    }
}