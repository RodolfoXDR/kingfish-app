import { ModelEntity } from "src/common/serializers/model.serializer";
import { IEmployee } from "../interfaces/employee.interface";

export class EmployeeEntity extends ModelEntity implements IEmployee {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    gender: string;
    phone: string;
    mail: string;
}