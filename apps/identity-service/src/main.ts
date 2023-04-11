import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as csrf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.NODE_ENV === 'dev' ? '*' : [process.env.FRONT_BASE_URL],
    preflightContinue: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  app.setGlobalPrefix('v1');
  /**
   * Helmet is just a collection of smaller middleware functions that set security-related HTTP headers.
   * It helps protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately
   */
  app.use(helmet());
  // parse cookies
  // we need this because "cookie" is true in csrfProtection
  app.use(cookieParser());
  app.use(csrf({ cookie: true }));

  if (process.env.NODE_ENV === 'dev') {
    const config = new DocumentBuilder()
      .addCookieAuth('CSRF-Token')
      .setTitle('TALENTGRAPH IDENTITY SERVICE EXAMPLE')
      .setDescription('The identity service API description')
      .setVersion('1.0')
      .addTag('talentgraph')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/doc', app, document);
  }

  await app.listen(3000);
}
bootstrap();
