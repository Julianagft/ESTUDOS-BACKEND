import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employees/entities/employee.entity";

export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, { onDelete: "SET NULL"})
    assigne: Employee;
}