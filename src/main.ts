import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;
const TEST_ENV = process.env.TEST_ENV || null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(PORT);
  console.log(TEST_ENV);
  await app.listen(PORT);
}

bootstrap();
