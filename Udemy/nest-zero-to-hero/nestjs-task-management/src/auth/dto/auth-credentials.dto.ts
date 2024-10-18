import { IsString, Matches, MaxLength, MinLength } from "class-validator";


export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "The password should contain at least 8 characters, including one uppercase letter, one lowercase letter, one special character, and one number."
    }) // regex de validação de senha.
    password: string;
}

