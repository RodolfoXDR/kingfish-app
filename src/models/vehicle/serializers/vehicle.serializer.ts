import { Expose } from "class-transformer";
import { ModelEntity } from "src/common/serializers/model.serializer";
import { IVehicle } from "../interfaces/vehicle.interface";

export class VehicleEntity extends ModelEntity implements IVehicle {
    id: string;
    
    alias: string;
    
    model: string;
  
    year: number;
    
    manufacturer: string;

    plates : string;
    
    status: number;
  
    @Expose({ groups: ['user.timestamps'] })
    createdAt: Date;
    
    @Expose({ groups: ['user.timestamps'] })
    updatedAt: Date;
  }