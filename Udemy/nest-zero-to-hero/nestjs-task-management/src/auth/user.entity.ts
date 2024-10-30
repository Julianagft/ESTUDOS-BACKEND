import { Task } from "src/tasks/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ unique: true }) // Diz ao typeORM que o userName é uma propriedade única (não pode existir mais de um usuário com o mesmo username).
    username: string;

    @Column()
    password: string;

    @OneToMany((_type) => Task, (task) => task.user, { eager: true })
    task: Task[];

}