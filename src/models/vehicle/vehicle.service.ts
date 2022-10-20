import { Injectable } from "@nestjs/common";
import { CustomResponseService } from "nestjs-custom-response";
import { VehicleRepository } from "./vehicle.repository";

@Injectable()
export class VehicleService {
    constructor(
        private readonly repository : VehicleRepository
    ) {}
  
    public async getVehicleById(customResponse : CustomResponseService, vehicleId : number): Promise<CustomResponseService> {
      return this.repository.getOneBy(customResponse, [{ id: vehicleId }]);
    }
}