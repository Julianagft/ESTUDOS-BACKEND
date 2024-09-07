import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true }) // isso torna esse dado opcional.
    phone?: string;

    @Column({ nullable: true })
    email?: string;

}