import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { LearningModule } from './learning.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LearningModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
