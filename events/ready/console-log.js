const { ActivityType } = require("discord.js");

module.exports = (argument, client, handler) => {
  // 狀態 online=在線, idle=閒置, dnd=請勿打擾, invisible=隱藏 client.user.setStatus("online");
  // 行為 Watching=正在看, Listening=正在聽, Streaming=正在直播, Playing=正在玩, Competing=競爭 client.user.setActivity("三上悠亞", { type: ActivityType.Watching });
  // 同時設定狀態和行為 client.user.setPresence({ Watching: [{ activities: '三上悠亞', type: ActivityType.Playing }], status: 'online' });
  client.user.setPresence({
    activities: [{ name: "機器人", type: ActivityType.Playing }],
    status: "online",
  });
  console.log(`Logged in as ${client.user.tag}!`);
};
