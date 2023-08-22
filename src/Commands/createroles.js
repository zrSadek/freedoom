const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = {
    name: "createroles",
    description: "Create a lot of roles",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const name = args.length > 0 ? args[0] : "Fucked by freedom";
        setTimeout(() => {
            message.delete()
        }, client.config.interval);
                
        for (let i = 0; i < 200 - message.guild.roles.cache.size; i++) {
            const color = getRandomColor();
            message.guild.roles.create({ name: name, color: color }).catch(err => {})
            await sleep(1000);
        }
    }
};
