const { SlashCommandBuilder } = require("discord.js");
const memesAPI = require("../memesAPI.js");

module.exports = {
  // deleted: true,
  data: new SlashCommandBuilder()
    .setName("fetch")
    .setDescription("抓取梗圖資料"),

  run: async ({ interaction, client, handler }) => {
    const result = await memesAPI.getMemesData();
    if (result.length === 0) {
      await interaction.reply("失敗！");
    } else {
      await interaction.reply("資料存取成功！");
    }
  },
};
