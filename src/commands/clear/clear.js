const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Apaga mensagens em massa de um canal.')
    .addIntegerOption(option =>
      option.setName('quantidade')
        .setDescription('Número de mensagens a apagar (1 a 100)')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    const amount = interaction.options.getInteger('quantidade');

    if (amount < 1 || amount > 100) {
      return await interaction.reply({
        content: '❌ Você deve escolher um número entre 1 e 100.',
        ephemeral: true
      });
    }

    await interaction.deferReply({ ephemeral: true });

    try {
      const deleted = await interaction.channel.bulkDelete(amount, true);
      await interaction.editReply(`✅ ${deleted.size} mensagens foram apagadas com sucesso.`);
    } catch (error) {
      console.error('Erro ao apagar mensagens:', error);
      await interaction.editReply('❌ Não foi possível apagar mensagens. Elas podem ser muito antigas (mais de 14 dias).');
    }
  }
};
