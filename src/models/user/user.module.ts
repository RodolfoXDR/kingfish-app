import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UsersController } from './user.controller';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersController],
    providers: [UserService, UserRepository],
    exports: [UserService]
})
export class UserModule {}