module.exports = {
    name: "messageCreate",
    async execute(client, message) {
        message.message.react(!isNaN(parseInt(message.id)) ? message._emoji.id : message._emoji.name)

        if(message.embeds?.[0]?.title?.toLowerCase().includes("giveaway") || message.embeds?.[0]?.fields[0]?.name?.toLowerCase().includes("giveaway")) {
            message.clickButton().catch((e) => {})
        } else if(message?.components?.[0]?.components[0]?.find((x) => x?.emoji?.name == "🎉")) {
            message.clickButton().catch((e) => {})

        }
    }
}