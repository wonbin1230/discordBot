const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const memesData = require("../memes.json");

module.exports = {
  // deleted: true,
  data: new SlashCommandBuilder()
    .setName("memes")
    .setNameLocalizations({
      "zh-TW": "傳送梗圖",
    })
    .setDescription("send memes picture.")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("id")
        .setDescription(`input id that you want to send memes's picture`)
        .setDescriptionLocalizations({
          "zh-TW": "輸入梗圖ID以傳送梗圖",
        })
        .addIntegerOption((option) =>
          option
            .setName("id")
            .setDescription(`input id that you want to send memes's picture`)
            .setDescriptionLocalizations({
              "zh-TW": "輸入梗圖ID以傳送梗圖",
            })
        )
    ),

  run: async ({ interaction }) => {
    const subcommand = interaction.options.getSubcommand();
    const value = interaction.options.getInteger("id");

    for (let i = 0; i < memesData.length; i++) {
      const ele = memesData[i];
      if (subcommand === "id") {
        if (value === ele.id) {
          const attachment = new AttachmentBuilder(ele.src);
          await interaction.channel.send({
            files: [attachment],
          });
          await interaction.reply(ele.title);
          break;
        } else if (i === memesData.length - 1 && value !== ele.id) {
          await interaction.reply("查無此ID之梗圖，請使用/list列表查看ID");
        }
      } else {
        return true;
      }
    }
  },
};
