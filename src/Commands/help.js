const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "help",
    description: "List of commands",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        
        if(client.commands.get(args[0])) {

            await setTimeout(() => {
                message.edit({ content: `\`${client.config.prefix}${client.commands.get(args[0]).name}\` - ${client.commands.get(args[0]).description}`})
            }, client.config.interval);

        } else if(!args[0]) {

            await setTimeout(() => {
                message.edit({ content: "__**\n� Freedom - " + client.commands.size + " commands\n\n**__" + client.commands.map((x) =>  `\`${client.config.prefix}${x.name}\``).join(", ") + "\n\nℹ For detailled help, use `" + client.config.prefix + "help <command>`"})
            }, client.config.interval);
        } else {
            
            await setTimeout(() => {
                message.edit({ content: "That command doesn't exist"})
            }, client.config.interval);
            
        }

    }
}