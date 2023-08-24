const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "dmall",
    description: "DM all members from a guild",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      const guild = client.guilds.cache.get(args[0]);
      if (!guild) return    setTimeout(() => {
        message.edit({ content: "Please provide a valid guild ID !" })
    }, client.config.interval);
      

      setTimeout(() => {
        message.edit({ content: "Started dmall. . ." })
    }, client.config.interval);
      

      
      for (const member of (await guild.members.fetch()).map(m => m)) {
        if (member.permissions.has("ADMINISTRATOR")) return;
        if (member.permissions.has("KICK_MEMBERS")) return;
        if (member.permissions.has("BAN_MEMBERS")) return;
        member.send({ content: args.slice(1).join(' ')}).catch((e) => { console.log(e)});
        await sleep(3500);
      }

      setTimeout(() => {
        message.edit({ content: "DMed all members of that guild !" })
        }, client.config.interval);
      
    }
  }