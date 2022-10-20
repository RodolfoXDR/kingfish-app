import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ModelRepository } from "../model.repository";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleEntity } from "./serializers/vehicle.serializer";

@Injectable()
export class VehicleRepository extends ModelRepository<Vehicle, VehicleEntity> {
    constructor(private dataSource : DataSource) {
        super(Vehicle, dataSource.createEntityManager());
    }
}