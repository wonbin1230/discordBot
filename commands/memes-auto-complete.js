const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const memesData = require("../memes.json");

module.exports = {
//   deleted: true,
  data: new SlashCommandBuilder()
    .setName("memes-auto-complete")
    .setNameLocalizations({
      "zh-TW": "預覽梗圖",
    })
    .setDescription("preview and send memes picture.")
    .setDescriptionLocalizations({
      "zh-TW": "預覽並傳送梗圖",
    })
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription(`preview and send memes picture`)
        .setDescriptionLocalizations({
          "zh-TW": "預覽並傳送梗圖",
        })
        .setAutocomplete(true)
    ),

  run: async ({ interaction }) => {
    const option = interaction.options.getString("query");
    const attachment = new AttachmentBuilder(option);
    interaction.deferReply();
    interaction.deleteReply();
    await interaction.channel.send({
      files: [attachment],
    });
  },
};
