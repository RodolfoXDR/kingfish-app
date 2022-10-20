import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MySQLConfigService } from './config.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                MYSQL_HOST: Joi.string().default('localhost'),
                MYSQL_PORT: Joi.number().default(3306),
                MYSQL_DATABASE: Joi.string().default('database'),
                MYSQL_USERNAME: Joi.string().default('root'),
                MYSQL_PASSWORD: Joi.string().default(''),
            })
        })
    ],
    providers: [
        ConfigService,
        MySQLConfigService
    ],
    exports: [
        ConfigService,
        MySQLConfigService
    ]
})
export class MySQLConfigModule {}