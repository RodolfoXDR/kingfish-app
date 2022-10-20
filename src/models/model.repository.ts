import { HttpException, HttpStatus, NotFoundException } from "@nestjs/common";
import { plainToClass, plainToInstance } from "class-transformer";
import { FindOptionsWhere, Repository } from "typeorm";
import { ModelEntity } from "../common/serializers/model.serializer";
import { CustomResponseService } from 'nestjs-custom-response';

export class ModelRepository<T, K extends ModelEntity> extends Repository<T> {
    
  async getOneBy(customResponse : CustomResponseService, whereOptions: FindOptionsWhere<T> | FindOptionsWhere<T>[], relations : string[] = [], throwsException : boolean = true): Promise<CustomResponseService> {
    return this.findOne({
      where: whereOptions,
      relations: relations
    }).then(entity => {
      if(!entity && throwsException) {
        return customResponse.makeErrorResponse("response.error.notFound", 450);
      }

      return customResponse.makeResponseResponse("response.message.successfully", 200, (entity ? this.transform(entity) : null));
    });
  }

  public transform(model : T, transformOptions : any = {}) : K {
    return plainToClass(ModelEntity, model, transformOptions) as K;
  }

  public transformMany(models : T[], transformOptions : any = {}) : K[] {
    return models.map(model => this.transform(model, transformOptions));
  }
}