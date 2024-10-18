import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ unique: true }) // Diz ao typeORM que o userName é uma propriedade única (não pode existir mais de um usuário com o mesmo username).
    username: string;

    @Column()
    password: string;

}