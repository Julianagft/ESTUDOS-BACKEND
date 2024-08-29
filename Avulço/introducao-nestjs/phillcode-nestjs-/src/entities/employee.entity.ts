export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}