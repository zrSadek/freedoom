const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const fs = require("fs")
const backup = require("discordio-backup")
module.exports = {
    name: "backupcreate",
    description: "Creates a backup",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      const guild = client.guilds.cache.get(args[0]);
      if (!guild) return    setTimeout(() => {
        message.edit({ content: "Please provide a valid guild ID !" })
    }, client.config.interval);
      

      setTimeout(() => {
        message.edit({ content: "Creating backup. . ." })
    }, client.config.interval);
      

        await backup.create(guild, {
            jsonBeautify: true
        })
        .then((x) => 
        {
            
        setTimeout(() => {
        message.edit({ content: "Backup created as " + x.id })
        }, client.config.interval);
      
        })
    }
  }