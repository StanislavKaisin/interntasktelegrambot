import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UsePipes,
  BadRequestException,
  ValidationPipe,
  ParseIntPipe,
  Delete,
  HttpStatus,
  Get,
  // HttpStatus,
} from '@nestjs/common';
import { JoiValidationPipe } from 'src/Middleware/joi-validation.middleware';
import { BotService } from './bot.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { createBotSchema } from './validation/bot.validation';
// import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { JoiValidationPipe } from 'src/middleware/joi-validation.middleware';
// import { createUserSchema } from 'src/middleware/createUserSchema';
// import { hashPassword } from 'src/utils/encryption';
// import { updateUserSchema } from 'src/middleware/updateUserSchema';

// const MongoErrorDuplicateKeyErrorCode = 11000;

@Controller('bots')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createBotSchema))
  async create(@Body() createBotDto: CreateBotDto) {
    try {
      const result = await this.botService.create(createBotDto);
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
