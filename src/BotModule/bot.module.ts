import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatchModule } from 'src/CatchModule/catch.module';
import { CatchService } from 'src/CatchModule/catch.service';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { BotEntity } from './entities/bot.entity';

@Module({
  controllers: [BotController],
  providers: [BotService],
  imports: [TypeOrmModule.forFeature([BotEntity]), CatchModule],
  exports: [BotService],
})
export class BotModule {}
