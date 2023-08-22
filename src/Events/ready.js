const Selfbot = require("../Classes/selfbot");
const { SpotifyRPC } = require("djs-selfbot-v14")
const colors = require("colors");

module.exports = {
    name: "ready",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client) {
        console.clear()
        console.log("___________________________________________________________")
        console.log(colors.blue(`

███████╗██████╗░███████╗███████╗██████╗░░█████╗░███╗░░░███╗
██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗████╗░████║
█████╗░░██████╔╝█████╗░░█████╗░░██║░░██║██║░░██║██╔████╔██║
██╔══╝░░██╔══██╗██╔══╝░░██╔══╝░░██║░░██║██║░░██║██║╚██╔╝██║
██║░░░░░██║░░██║███████╗███████╗██████╔╝╚█████╔╝██║░╚═╝░██║
╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚══════╝╚═════╝░░╚════╝░╚═╝░░░░░╚═╝
        `))
        console.log(`___________________________________________________________
        `)
        console.log(colors.blue("[ READY ] : ") + "Logged in as " + client.user.username) 
        console.log(colors.blue("[ FRIENDS ] : ") + client.relationships.cache.size + " friends") 
        console.log(colors.blue("[ GUILDS ] : ") + client.guilds.cache.size + " guilds") 
        console.log(colors.blue("[ USERS ] : ") + client.users.cache.size + " users") 
        console.log("___________________________________________________________")

        setInterval(() => {
            client.refresh()
        }, 60000);
    }
};