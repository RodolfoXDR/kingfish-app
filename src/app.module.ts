import { EmployeeModule } from './models/employee/employee.module';
import { EmployeeController } from './models/employee/employee.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { MySQLConfigModule } from './config/database/mysql/config.module';
import { UserModule } from './models/user/user.module';
import { MySQLProviderModule } from './providers/database/mysql/provider.module';
import { DataSource } from 'typeorm';
import {
  AcceptLanguageResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n-2';
import * as path from 'path';
import { VehicleModule } from './models/vehicle/vehicle.module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [QueryResolver, AcceptLanguageResolver],
    }),

    AppConfigModule,
    MySQLConfigModule,

    MySQLProviderModule,

    UserModule,
    VehicleModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
