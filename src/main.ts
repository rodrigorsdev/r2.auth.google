import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const logger = new Logger('main');

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
  .setTitle('r2.auth.google')
  .setVersion('0.0.1')
  .build();

const document = SwaggerModule.createDocument(app, swaggerOptions);
SwaggerModule.setup('docs', app, document);

const port = configService.get('PORT') || 3000;
await app.listen(port);
logger.log(`r2.auth.google started at port ${port}`);
}
bootstrap();
