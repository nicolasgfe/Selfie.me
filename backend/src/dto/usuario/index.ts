import { IsNotEmpty, IsEmail, IsString, MinLength, IsBoolean } from 'class-validator';

export class CreateUsuariodto {

    @IsString()
    nome: string;

    @IsString()
    sobrenome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    senha: string;
}
