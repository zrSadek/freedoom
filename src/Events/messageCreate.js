const Selfbot = require("../Classes/selfbot");
const { Message } = require("djs-selfbot-v14")

module.exports = {
    name: "messageCreate",
    /**
     * 
     * @param {Selfbot} client 
     * @param {Message} message 
     * @returns 
     */
    async execute(client, message) {
        if(message.author.id != client.user.id) return; 
        if(!message.content) return;
        if(!message.content.startsWith(client.config.prefix)) return;

        let args = message.content.trim().split(' ');
        const command = args[0].slice(client.config.prefix.length).toLowerCase();
        args = args.slice(1);

        const cmd = client.commands.get(command)

        if(cmd) {
            cmd.execute(client, message, args)
        } else {
            return;   
        }
    }
}