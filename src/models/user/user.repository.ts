import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';
import { ModelRepository } from '../model.repository';
import { UserEntity } from './serializers/user.serializer';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class UserRepository extends ModelRepository<User, UserEntity> {
    constructor(private dataSource : DataSource) {
        super(User, dataSource.createEntityManager());
    }
}