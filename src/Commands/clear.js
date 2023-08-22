const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "clear",
    description: "Delete messages off a channel",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const number = !isNaN(parseInt(args[0])) ? args[0] : 99
        setTimeout(() => {
            message.delete().catch((err) => {})
        }, client.config.interval);

        const messages = (await message.channel.messages.fetch({ max: number})).filter((x) => x.author.id === client.user.id)
        let msg = 0

        messages.forEach(msg=> {
            if(msg < number) {
                msg.delete().catch(err => {})
                msg++
            }
        });
    }
}