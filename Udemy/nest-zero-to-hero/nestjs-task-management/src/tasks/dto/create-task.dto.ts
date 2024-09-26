import { IsNotEmpty } from "class-validator";
// Pacote que valida automaticamente sem a necessidade de várias linhas de código.

export class CreateTaskDto {
    @IsNotEmpty() // Faz a validação automaticamente para nós.
    title: string;

    @IsNotEmpty()
    description: string;
}

