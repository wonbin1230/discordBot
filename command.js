const { REST, Routes } = require("discord.js");
const { token, client_id } = require("./env.json");

const commands = [
  {
    name: "fetch",
    description: "抓取梗圖資料",
  },
  {
    name: "list",
    description: "梗圖列表",
  },
  {
    name: "memes",
    description: "我要梗圖",
  },
  {
    name: "bot-info",
    description: "顯示機器人資訊",
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
