const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));
const fs = require("fs")
const backup = require("discordio-backup")

module.exports = {
    name: "backupload",
    description: "Load a backap",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
            
        let guild;
       
        backup.fetch(args[0])
        .then(async (x) => {

        setTimeout(() => {
            message.edit("Loading the backup. . .")
        }, client.config.interval);
            await backup.load(args[0], message.guild).catch((e) => {
                setTimeout(() => {
                    message.edit("V14 required to load backups !")
                }, client.config.interval);
            })
        })
        .catch((e) => {
            

        setTimeout(() => {
            message.edit("Invalid backup ID !")
        }, client.config.interval);
        })

    }
  }