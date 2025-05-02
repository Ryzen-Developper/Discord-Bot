const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Ryzen`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</kauax2#0496`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `KaiLee Team`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `https://kailee-bot-com.vercel.app/`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
