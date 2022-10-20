import { Entity } from "typeorm";
import { IEmployee } from "../interfaces/employee.interface";

@Entity({ name: 'employees'})
export class Employee implements IEmployee {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: Date;
    gender: string;
    phone: string;
    mail: string;
}