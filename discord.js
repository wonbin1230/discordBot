const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const { token, client_id } = require("./env.json");
const memesAPI = require("./memes.js");
const memes = require("./memes.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

function msToHMS(ms) {
  let seconds = ms / 1000; //將毫秒轉換為秒
  const hours = parseInt(seconds / 3600); //將可以轉為小時的秒轉換為小時
  seconds = seconds % 3600; //去除已轉換為小時的秒
  const minutes = parseInt(seconds / 60); //將可以轉為分鐘的秒轉換為分鐘
  seconds = seconds % 60; //去除已轉換為分鐘的秒
  return `${hours}:${minutes}:${~~seconds}`; //回傳轉換後的結果，秒數進行四捨五入
}

client.on("ready", () => {
  // 狀態 online=在線, idle=閒置, dnd=請勿打擾, invisible=隱藏 client.user.setStatus("online");
  // 行為 Watching=正在看, Listening=正在聽, Streaming=正在直播, Playing=正在玩, Competing=競爭 client.user.setActivity("三上悠亞", { type: ActivityType.Watching });
  // 同時設定狀態和行為 client.user.setPresence({ Watching: [{ activities: '三上悠亞', type: ActivityType.Playing }], status: 'online' });
  client.user.setPresence({
    activities: [{ name: "三上悠亞", type: ActivityType.Playing }],
    status: "online",
  });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  // if (message.content.startsWith('蛤')) {
  //     await message.reply(`${message.author.username} 蛤三小`)
  // }
  if (message.content === "蛤") {
    await message.channel.send({
      files: ["./gif/huh.gif"],
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "fetch") {
    const memesData = await memesAPI.getMemesData();
    if (memesData.length === 0) {
      await interaction.reply("失敗！");
    } else {
      await interaction.reply("資料存取成功！");
    }
  }

  if (interaction.commandName === "list") {
    let listData = ""
    for (let i = 0; i < memes.length; i++) {
      const ele = memes[i];
      listData += `\`\`\`arm\n${ele.id} ${ele.title}\`\`\`\n`;
    }
    await interaction.reply(listData);
  }

  if (interaction.commandName === "bot-info") {
    await interaction.reply(
      `機器人名稱：${client.user.username}\n` +
        `機器人ＩＤ：${client.user.id}\n` +
        `機器人製作者：Yu\n` +
        `機器人建立時間：<t:${~~(client.user.createdTimestamp / 1000)}:R>\n` +
        `機器人邀請連結：https://discord.com/api/oauth2/authorize?client_id=1093785979808141384&permissions=2048&scope=bot\n` +
        `機器人版本：v1\n` +
        `機器人所在伺服器數量：${client.guilds.cache.size}\n` +
        `機器人上線時間：${msToHMS(client.uptime)}`
    );
  }
});

client.login(token);
