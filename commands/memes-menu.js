const {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
  SlashCommandBuilder,
} = require("discord.js");
const memesData = require("../memes.json");

module.exports = {
  deleted: true,
  data: new SlashCommandBuilder()
    .setName("memes-menu")
    .setNameLocalizations({
      "zh-TW": "梗圖列表",
    })
    .setDescription("send memes picture from menu..")
    .setDescriptionLocalizations({
      "zh-TW": "選擇你要傳送的梗圖",
    }),

  run: async ({ interaction }) => {
    const menuData = [];
    memesData.forEach(async (ele) => {
      const menuItem = {
        label: ele.title,
        value: ele.src,
      };
      menuData.push(menuItem);
    });

    const selectMenu = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder()
        .setCustomId("memesMenu")
        .setPlaceholder("選擇你要傳送的梗圖")
        .addOptions(menuData)
    );

    await interaction.reply({
      components: [selectMenu],
    });
  },
};
