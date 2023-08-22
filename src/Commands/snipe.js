
module.exports = {
    name: "snipe",
    description: "Returns the last message deleted.",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        let number = message?.options?._hoistedOptions[0]?.value || args[0]
        
        if(!number || isNaN(number)) number = 1
        if(Number(number) < 1 || Number(number) > 3) return setInterval(() => {
            message.edit({ content: `The number must be between 1 and 3`})
        }, client.config.interval);

        const snipes = client.snipes.get(message.channel.id)
        
        if(!snipes) return setInterval(() => {
            message.edit({ content: `There's no message to snipe !`})
        }, client.config.interval);


        const numSnipe = Number(number)
        const MaxHaut = snipes[numSnipe - 1];

        if(!MaxHaut) return setInterval(() => {
            message.edit({ content: `There are only ${snipes.length} 2 messages to snipe`})
        }, client.config.interval);

        let fields = [];
     

        message.edit({

            content: `Author: **${MaxHaut.author.username}**\nContent: \`\`\` ${MaxHaut.content || ""}\`\`\`\nImage: ${MaxHaut.image || ""}\nDate: <t:${Math.floor(MaxHaut.timestamp / 1000)}:R>`
        })

    }
}