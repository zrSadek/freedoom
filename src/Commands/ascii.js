const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "ascii",
    description: "ascii text",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {
        const asciitext = args.join(" ") || "Freedoom"

        setTimeout(() => {
            message.edit({ content: "```" + convertToAscii(asciitext) + "```"})
        }, client.config.interval);
        
    }
}

function convertToAscii(text) {
    let asciiArt = "";
  
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      asciiArt += String.fromCharCode(charCode) + " ";
    }
  
    return asciiArt;
  }
  