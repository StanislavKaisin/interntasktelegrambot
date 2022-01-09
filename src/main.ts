import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule/app.module';

const PORT = process.env.SERVER_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
