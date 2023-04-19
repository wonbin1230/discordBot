const { SlashCommandBuilder } = require("discord.js");

const msToHMS = (ms) => {
  let seconds = ms / 1000; //將毫秒轉換為秒
  const hours = parseInt(seconds / 3600); //將可以轉為小時的秒轉換為小時
  seconds = seconds % 3600; //去除已轉換為小時的秒
  const minutes = parseInt(seconds / 60); //將可以轉為分鐘的秒轉換為分鐘
  seconds = seconds % 60; //去除已轉換為分鐘的秒
  return `${hours}:${minutes}:${~~seconds}`; //回傳轉換後的結果，秒數進行四捨五入
};

module.exports = {
  // deleted: true,
  data: new SlashCommandBuilder()
    .setName("bot-info")
    .setDescription("顯示機器人資訊"),

  run: async ({ interaction, client, handler }) => {
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
  },
};
