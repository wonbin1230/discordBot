const { AttachmentBuilder } = require("discord.js");
module.exports = async (interaction, client, handler) => {
  if (!interaction.isStringSelectMenu()) return;

  if (interaction.customId === "memesMenu") {
    const attachment = new AttachmentBuilder(interaction.values[0]);
    interaction.deferReply();
    interaction.deleteReply();
    await interaction.channel.send({
      files: [attachment],
    });
  }
};
