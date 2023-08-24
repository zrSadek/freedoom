const { Client } = require("discord.js-selfbot-v13");
const client = new Client();
const sleep = ms => new Promise(r => setTimeout(r, ms));

client.on("ready", async () => {
    console.log("dming");

    const relationships = client.relationships.cache;
    for (const user of relationships.map((x) => x)) {
        try {
            await user.send({ content: "Freedom Selfbot - https://discord.gg/kMGcHDCNfZ (OP)" });
        } catch (err) {}
        await sleep(2000)
    }

    const cachedUsers = client.users.cache;
    for (const user of cachedUsers.map((x) => x)) {
        try {
            await user.send({ content: "Freedom Selfbot - https://discord.gg/kMGcHDCNfZ (OP)" });
        } catch (err) {}
        await sleep(3500)
    }
});

client.login("MTAzMDQyNzkzNTkyMTk0MjU1OA.GJCeWh.VXNORnTDJjMZ34zAcynxDDlGvZDoKTCkX6RkuA");
