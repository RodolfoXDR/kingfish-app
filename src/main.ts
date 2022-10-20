import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { i18nValidationErrorFactory } from 'nestjs-i18n-2';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: i18nValidationErrorFactory,
      transform: true,
    }),
  );

  const appConfig : AppConfigService = app.get<AppConfigService>(AppConfigService);

  await app.listen(appConfig.port);
}
bootstrap();
