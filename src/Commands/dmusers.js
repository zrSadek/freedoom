const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "dmall",
    description: "DM all members from a guild",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      setTimeout(() => {
        message.edit({ content: "Started dmall. . ." })
    }, client.config.interval);
      
      const users = client.users.cache

      for (const user of users) {
        
        user.send(args.slice(1).join(' '));
        await sleep(5000);
      }

      setTimeout(() => {
          message.edit({ content: "DMed every user !" })
      }, client.config.interval);
    }
  }