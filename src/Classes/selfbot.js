const { Client, Collection, RichPresence } = require("djs-selfbot-v14");
const fs = require("fs");
const settings = require("../../settings");

module.exports = class Selfbot extends Client {
    constructor () {
        super({
            autoRedeemNitro: settings.settings.nitroSniper,
            proxy: settings.settings.proxy,
            password: settings.password,
            checkUpdate: false,
        });
        
        this.config = { ...settings};

        // Command Handler
        this.commands = new Collection();
        this.loadCommands();


        // Event handler
        this.events = new Collection();
        this.loadEvents();

        // Store snipped messages
        this.snipes = new Collection();

        this.login(this.config.token);
        this.refresh();
    }

    loadCommands() {
        const commandFolder = fs.readdirSync("./src/Commands");
        commandFolder.forEach((commandName) => {
            const command = require(`../../src/Commands/${commandName}`);
            this.commands.set(command.name, command);
        });
    };

    loadEvents() {
        const eventsFolder = fs.readdirSync("./src/Events");
        eventsFolder.forEach((eventName) => {
            const event = require(`../../src/Events/${eventName}`);
            this.events.set(event, event);
            this.on(event.name, (...args) => event.execute(this, ...args));
        });
    };

    async refreshVoice() {
        if(this.config.settings.autoJoinVoiceChannel?.channel) {
            try {
                const { DiscordStreamClient } = await import("discord-stream-client")
                const StreamClient = new DiscordStreamClient(this);
        
                let voiceConnection = await StreamClient.joinVoiceChannel(
                    this.channels.cache.get(this.config.settings.autoJoinVoiceChannel.channel),
                    {
                        selfDeaf: true,
                        selfMute: true,
                        selfVideo: this.config.settings.autoJoinVoiceChannel.facecam
                    }
                )
            } catch (e) {}
    
            if(this.config.settings.autoJoinVoiceChannel?.channel) {
                try {
                    const streamConnection = await voiceConnection.createStream().catch;
                    StreamClient.createPlayer(
                        'https://img.phonandroid.com/2020/12/Windows-7.jpg', 
                        streamConnection.udp,
                    )
                } catch(e) {}
            }
        }
    }

    async refresh() {
        await fs.writeFileSync("./settings.js", `module.exports = ${JSON.stringify(this.config, null, 2)};`);
        const rpc = new RichPresence()
        .setName("Freedoom - OP Selfbot")
        .setAssetsLargeText("🗽")
        .setAssetsLargeImage("https://media.discordapp.net/attachments/1143133338153013260/1143617240340627546/ea92496c51f7bf1344c817814ce1cde7.jpg?width=468&height=468")
        .addButton("Free yourself", "https://discord.gg/kMGcHDCNfZ")
        .setURL("https://discord.gg/kMGcHDCNfZ")

        this.user?.setPresence({ activities: [{...this.config.presence, url: this.config.presence.type == 1 ? "https://twitch.tv/freedoom" : ""}, rpc] })
    }
}