const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1367675178485682257",
    token: "yX5kC8SuRhYv9LTqrcLd__Vzur-2GA1FRkprI8J1OEz-AE-5xPYpAbW1NjjkIM3gbUUe",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 
