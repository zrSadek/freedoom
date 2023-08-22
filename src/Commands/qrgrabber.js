const Selfbot = require("../Classes/selfbot");
const handler = new (require("../Modules/qrcode"))();

module.exports = {
    name: "qrcode",
    description: "Generates a fake nitro qr code !",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message) {
        await setTimeout(() => {
            message.edit({ content: "Generating the qr code..."})
        }, client.config.interval);

        await handler.generate()

        setTimeout(() => {
            message.edit("Avaible soon !")
        }, client.config.interval);
    }
}