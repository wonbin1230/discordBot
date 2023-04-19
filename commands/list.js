const { SlashCommandBuilder } = require("discord.js");
const memesData = require("../memes.json");

module.exports = {
  // deleted: true,
  data: new SlashCommandBuilder().setName("list").setDescription("梗圖列表"),

  run: async ({ interaction, client, handler }) => {
    let listData = "";
    for (let i = 0; i < memesData.length; i++) {
      const ele = memesData[i];
      listData += `\`\`\`arm\n${ele.id} ${ele.title}\`\`\`\n`;
    }
    await interaction.reply(listData);
  },
};
