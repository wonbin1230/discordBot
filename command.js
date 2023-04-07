const { REST, Routes } = require("discord.js");
const { token, client_id } = require("./token.json");

const commands = [
  {
    name: "test",
    description: "test Bot",
  },
  {
    name: "bot-info",
    description: "Show Bot Information",
  }
];

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(client_id), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
