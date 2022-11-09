import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Environment } from './config';
import { Config } from './common/constants/config';
import { LoggerService } from './common/helpers/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envVariables = app.get(ConfigService).get<Environment>(Config);

  app.setGlobalPrefix('api');
  const logger = new LoggerService('App');

  const config = new DocumentBuilder()
    .setTitle('Go Api')
    .setDescription('Go Api Description')
    .setVersion('1.0')
    .addTag('go')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'Token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
    customSiteTitle: 'Go Api Docs',
  });

  await app.listen(envVariables.port);

  logger.log(`Server Listening on Port : ${envVariables.port}`);
}
bootstrap();
