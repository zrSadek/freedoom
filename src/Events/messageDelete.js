

module.exports = {
    name: "messageDelete",
    /**
     * 
     * @param {Selfbot} client 
     * @param {Message} message 
     * @returns 
     */

    async execute(client, message) {
    
        if(message && message.content) {
            const snipes = client.snipes.get(message.channel.id) || []

            if(snipes.length > 3) snipes.splice(3);

            snipes.unshift({
                author: message.author,
                content: message.content,
                image: message.attachments.first()?.proxyURL || null,
                timestamp: Date.now()
            })

        client.snipes.set(message.channel.id, snipes)
        }
    }}