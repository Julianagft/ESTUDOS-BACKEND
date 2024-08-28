import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('developers')
export class Developer {
    @PrimaryGeneratedColumn('uuid')
    id: string; 
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

    @BeforeInsert()
    generateId() {
    this.id = `dev_${uuidv4()}`;
  }

}
