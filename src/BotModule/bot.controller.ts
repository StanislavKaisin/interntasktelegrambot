import {
  Controller,
  Post,
  Body,
  Param,
  UsePipes,
  BadRequestException,
  ParseIntPipe,
  Delete,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { CatchService } from 'src/CatchModule/catch.service';
import { JoiValidationPipe } from 'src/Middleware/joi-validation.middleware';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { createBotSchema } from './validation/bot.validation';

@Controller('bots')
export class BotController {
  constructor(
    private readonly botService: BotService,
    private readonly catchService: CatchService,
  ) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createBotSchema))
  async create(@Body() createBotDto: CreateBotDto) {
    try {
      const result = await this.botService.create(createBotDto);
      await this.catchService.startBotSpying(result.bot_token);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Delete(':id')
  async remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      const result = await this.botService.findOneById(id);
      if (result) {
        return this.botService.delete(id);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Get()
  async getAll() {
    try {
      const result = await this.botService.find();
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
