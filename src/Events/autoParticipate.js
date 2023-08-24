module.exports = {
    name: "messageCreate",
    async execute(client, message) {
        if(message?.components?.[0]) {
            message.clickButton()
        }
    }
}