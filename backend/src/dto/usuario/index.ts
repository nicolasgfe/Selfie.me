import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, MinLength, IsBoolean } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @ApiProperty()
    nome: string;

    @IsString()
    @ApiProperty()
    sobrenome: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    status: boolean;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    senha: string;
}
