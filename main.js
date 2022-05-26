const { Telegraf } = require("telegraf");
const bot = new Telegraf("5308585791:AAEkHC1bUWui4Fbpsbc7irvTpbK6Grinm_8");
const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );
});

function sendUrl(url) {
  console.log(url);
}

//bot hears everyfing
bot.on("text", (ctx) => {
  sendUrl(ctx.message.text);
});

bot.launch();
