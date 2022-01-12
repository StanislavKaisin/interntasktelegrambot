import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { BotEntity } from './entities/bot.entity';

@Module({
  controllers: [BotController],
  providers: [BotService],
  imports: [TypeOrmModule.forFeature([BotEntity])],
  exports: [BotService],
})
export class BotModule {}
