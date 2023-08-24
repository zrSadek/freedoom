const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "closedms",
    description: "Close all the dms",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        setTimeout(() => {
            message.edit({ content: `Closing dms... `})
        }, client.config.interval);

        const dms = client.channels.cache

        dms.forEach(async e=>{
          if(e.type === 'DM'){
             await e.delete().catch(err => {}) 
          }
        })

        setTimeout(() => {
            message.edit({ content: `Closed all your dms! !`})
        }, client.config.interval);

        
    }
}