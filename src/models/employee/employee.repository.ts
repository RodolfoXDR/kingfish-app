import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ModelRepository } from "../model.repository";
import { Employee } from "./entities/employee.entity";
import { EmployeeEntity } from "./serializers/employee.serializer";

@Injectable()
export class EmployeeRepository extends ModelRepository<Employee, EmployeeEntity> {
    constructor(private dataSource : DataSource) {
        super(Employee, dataSource.createEntityManager());
    }
}