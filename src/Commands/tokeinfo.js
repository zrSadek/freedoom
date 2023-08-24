module.exports = {
    name: "tokeninfo",
    async execute(client, message, args) {
        const token = args[0];

    try {
        const res = await fetch("https://discord.com/api/v10/users/@me", {
        method: "GET",
        headers: {
            'authorization': token,
            'user-agent': 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36.0 (KHTML, like Gecko) Chrome/61.0.0.0 Safari/537.36.0'
        }
    });

    if (res.ok) {
        const response = await res.json();
        const userid = await client.users.fetch(response.id)
        let hasBadges = false;
        let userBadges = userid.flags.toArray();

        if (userid.avatar.startsWith('a_')) {
            hasBadges = true;
            userBadges.push('Nitro');
        }

        const content = `**Account Infos**\n`
            + `User name: \`${response.username}\`\n`
            + `Nitro: \`${response.premium_type === 2 ? 'Nitro' : '❌'}\n\``
            + `Country: \`${response.locale}\`\n`
            + `Phone N°: \`${response.phone ? `\`${response.phone}\`` : '❌'}\n\``
            + `Card: \`${response.purchased_flags === 2 ? '✅' : '❌'}\n\``
            + `Owns links: \`${response.purchased_flags === 4 ? '✅' : '❌'}\n\``
            + `Verified Account: \`${response.verified ? '✅' : '❌'}\n\``
            + `Badges [${userBadges.length}]: \`${userBadges.join(', ') || 'None'}\n\``
            + `Linked Accounts: \`${response.linked_users.length > 0 ? '✅' : '❌'}\n\``
            + `Token:\n\`\`\`yml\n${token}\`\`\`\n`
            + `Email:\n\`\`\`yml\n${response.email || '❌'}\`\`\`\n`
            + `Bio:\n\`\`\`yml\n${response.bio.length === 0 ? 'None' : response.bio}\`\`\``;

            setTimeout(() => {
                message.edit({ content: content})
            }, client.config.interval);
        } else { 
            setTimeout(() => {
                message.edit({ content: "Invalid token"})
            }, client.config.interval);
        }
        } catch (error) {
            console.log(error)
            setTimeout(() => {
                message.edit({ content: "Invalid token"})
            }, client.config.interval);
        }

    }
}