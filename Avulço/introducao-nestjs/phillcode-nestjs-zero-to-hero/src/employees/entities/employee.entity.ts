import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
@Entity()
export class Employee {
  @PrimaryGeneratedColumn() // Faz o banco de dados gerar automaticamente um novo número;
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, { onDelete: "SET NULL" })
  @JoinColumn()
  manager: Employee;

  @Column({ nullable: true })
  managerId: number;

  @OneToOne(() => ContactInfo, {cascade: true}) // cascade: true pois se eu deletar o funcionário eu quero que as informações de contato dele sejam deletadas também.
  @JoinColumn()
  contactInfo: ContactInfo;

}