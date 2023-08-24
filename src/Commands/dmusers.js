const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "dmusers",
    description: "DM all the users cached",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      setTimeout(() => {
        message.edit({ content: "Started dmall. . ." })
    }, client.config.interval);
      
      const users = client.users.cache

      for (const user of users.map((x) => x)) {
        
        user.send(args.slice(1).join(' '));
        await sleep(5000);
      }

      setTimeout(() => {
          message.edit({ content: "DMed every user !" })
      }, client.config.interval);
    }
  }