import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  const PORT = 8080
  await app.listen(PORT, () => console.log(`API gateway started on PORT ${PORT}`));
}
bootstrap();
