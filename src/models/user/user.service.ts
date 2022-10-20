import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from './user.repository';
import { FindOptionsWhere } from 'typeorm';
import { CustomResponseService } from 'nestjs-custom-response';
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
      private readonly repository : UserRepository
  ) {}

  public async getUser(customResponse : CustomResponseService, id : number | string): Promise<CustomResponseService> {
    let whereOptions : FindOptionsWhere<User> | FindOptionsWhere<User>[] = (isNaN(+id)) ? [{ username: String(id) }] : [{ id: Number(id) }];
    return this.repository.getOneBy(customResponse, whereOptions);
  }
}