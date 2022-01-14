import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotEntity } from './entities/bot.entity';

@Injectable()
export class BotService {
  constructor(
    @InjectRepository(BotEntity)
    private botRepository: Repository<BotEntity>,
  ) {}

  async find() {
    const result = await this.botRepository.find();
    return result;
  }
  async create(createBotDto: CreateBotDto) {
    const result = await this.botRepository.save(createBotDto);
    return result;
  }
  async delete(id: number) {
    return await this.botRepository.delete(id);
  }
  async findOneById(id: number) {
    return await this.botRepository.findOneOrFail(id);
  }
}
