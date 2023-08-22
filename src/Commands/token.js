const Selfbot = require("../Classes/selfbot");
const sleep = ms => new Promise(r => setTimeout(r, ms));

module.exports = {
    name: "token",
    description: "Returns the start of the token of an id",
    /**
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
      const id = args[0]
      if (isNaN(id)) return    setTimeout(() => {
        message.edit({ content: "Please provide an ID !" })
    }, client.config.interval);
      

      setTimeout(() => {
        message.edit({ content: btoa(id).toString() })
    }, client.config.interval);
    
    }
  }