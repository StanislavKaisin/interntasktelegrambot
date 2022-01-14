import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotModule } from 'src/BotModule/bot.module';
import { BotEntity } from 'src/BotModule/entities/bot.entity';
import { CatchModule } from 'src/CatchModule/catch.module';
import { config } from 'src/Config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.HOST,
      port: config.PORT,
      username: config.USERNAME,
      password: config.PASSWORD,
      database: config.DATABASE,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [BotEntity],
      synchronize: true,
    }),
    BotModule,
    CatchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
