const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "leavegroups",
    description: "Leaves all the groups",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        setTimeout(() => {
            message.edit({ content: `Leaving all the groups... `})
        }, client.config.interval);

        const dms = client.channels.cache

        dms.forEach(async e=>{
          if(e.type === 'GROUP_DM'){
             await e.delete().catch(err => {}) 
          }
        })

        setTimeout(() => {
            message.edit({ content: `Left all groups !`})
        }, client.config.interval);

        
    }
}