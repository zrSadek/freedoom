module.exports = {
    name: "messageCreate",
    async execute(client, message) {
        if(message.embeds?.[0]?.title?.toLowerCase().includes("giveaway") || message.embeds?.[0]?.fields[0]?.name?.toLowerCase().includes("giveaway")) {
            message.clickButton().catch((e) => {})
        } else if(message?.components?.[0]?.components[0] && message?.components?.[0]?.components[0]?.find((x) => x?.emoji?.name == "🎉")) {
            message.clickButton().catch((e) => {})

        }
    }
}
