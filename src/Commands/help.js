const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "help",
    description: "List of commands",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        await setTimeout(() => {
            message.edit({ content: "__**\n� Freedom - " + client.commands.size + " commands\n\n**__" + client.commands.map((x) =>  `\`${client.config.prefix}${x.name}\` - ${x.description}`).join("\n")})
        }, client.config.interval);

    }
}