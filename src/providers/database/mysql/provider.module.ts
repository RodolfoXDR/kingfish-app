import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm/dist";
import { MySQLConfigService } from '../../../config/database/mysql/config.service';
import { MySQLConfigModule } from '../../../config/database/mysql/config.module';
import { DatabaseType } from "typeorm/driver/types/DatabaseType";
import { User } from '../../../models/user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [MySQLConfigModule],
            useFactory: async(mySQLConfigService : MySQLConfigService) => ({
                type: 'mysql' as DatabaseType,
                host: mySQLConfigService.host,
                port: mySQLConfigService.port,
                database: mySQLConfigService.database,
                username: mySQLConfigService.username,
                password: mySQLConfigService.password,
                entities: [__dirname + '/../../../**/*.entity{.ts,.js}']
            }),
            inject: [MySQLConfigService]
        } as TypeOrmModuleAsyncOptions)
    ]
})
export class MySQLProviderModule {}