import { Injectable } from '@nestjs/common';
// const { Telegraf } = require('telegraf')
import { Telegraf } from 'telegraf';

@Injectable()
export class CatchService {
  constructor() {}

  async startBotSpying(BOT_TOKEN: string) {
    console.log(`BOT_TOKEN`, BOT_TOKEN);
    const bot = new Telegraf(BOT_TOKEN);
    bot.on('message', (ctx) => console.log(`message`, ctx.message));
    bot.launch();
  }
}
