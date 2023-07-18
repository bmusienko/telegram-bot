require("dotenv").config();
const { Telegraf } = require("telegraf");

// Token
const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU);

bot.start((ctx) =>
  ctx.reply(
    'Hello, World'
  )
);

bot.launch();