import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IVehicle } from "../interfaces/vehicle.interface";

@Entity({ name: 'vehicles'})
export class Vehicle implements IVehicle {
    
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    alias: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    manufacturer: string;
    
    @Column()
    plates: string;
    
    @Column()
    status: number;
}