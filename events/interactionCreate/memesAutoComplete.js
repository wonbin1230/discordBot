const { AttachmentBuilder } = require("discord.js");
const memesData = require("../../memes.json");

module.exports = async (interaction, client, handler) => {
  if (!interaction.isAutocomplete()) return;

  const focusedValue = interaction.options.getFocused();

  let choices = [];
  memesData.forEach(async (ele) => {
    const memesItem = {
        name: ele.title,
        value: ele.src
    }
    choices.push(memesItem);
  });

  const filtered = choices.filter((choice) => choice.name.startsWith(focusedValue));
  await interaction.respond(
    filtered.map((choice) => ({ name: choice.name, value: choice.value }))
  );
};
