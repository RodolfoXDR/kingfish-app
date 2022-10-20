import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
                APP_NAME: Joi.string().default('KingFish'),
                APP_URL: Joi.string().default('http://localhost'),
                APP_PORT: Joi.number().default(9000)
            })
        })
    ],
    providers: [
        ConfigService,
        AppConfigService
    ],
    exports: [
        ConfigService,
        AppConfigService
    ]
})
export class AppConfigModule {}