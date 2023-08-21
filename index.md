const { Client } = require("./discord.js-selfbot-v14")
const client = new Client()

client.on("ready", () => {
    console.log("Im online !")

});


client.login("token")