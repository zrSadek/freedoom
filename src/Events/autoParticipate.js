module.exports = {
  name: "messageCreate",
  async execute(client, message) {
    if (message.embeds.length > 0 && message.embeds[0].title && message.embeds[0].title.toLowerCase().includes("giveaway") || message.embeds.length > 0 && message.embeds[0].fields && message.embeds[0].fields.length > 0 && message.embeds[0].fields[0].name.toLowerCase().includes("giveaway")) {
      message.clickButton().catch(() => false)
    } else if (message.components.length > 0 && message.components[0].components.filter(c => c.type === "BUTTON").length > 0 && message.components[0].components.find((x) => x.emoji?.name == "🎉")) {
      message.components[0].components.filter(c => c.type === "BUTTON").map(button => 
        message.clickButton(button)
      )
    }
  }
}
