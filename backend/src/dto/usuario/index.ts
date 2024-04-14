import { IsNotEmpty, IsEmail, IsString, MinLength, IsBoolean } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nome: string;

    @IsString()
    sobrenome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    senha: string;
}
