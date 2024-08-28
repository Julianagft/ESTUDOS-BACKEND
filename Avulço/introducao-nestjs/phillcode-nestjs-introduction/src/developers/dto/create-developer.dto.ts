import { IsDateString, IsEmail, IsString } from "class-validator";

export class CreateDeveloperDto {
    @IsString() // valida automaticamente os dados.
    name: string;

    @IsEmail() 
    email: string;

    @IsDateString()
    dateOfBirth: string;

}

// Precisamos abilitar esse comportamente dentro do mainModule.ts