const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const fs = require("fs")

module.exports = {
    name: "backuplist",
    description: "A list of your backups",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      
      const folder = fs.readdirSync("./backups")
        
      let data = []

      folder.forEach( async (x) => {
        const d = require(`../../database/${x}`)
        data.push(`**${d.name}** - ${d.id}`)
      })

      setTimeout(() => {
        message.edit(data.join("\n"))
      }, client.config.interval);

    }
  }