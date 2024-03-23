import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreatePlanoDto {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  valor: string;

  @IsNotEmpty()
  validade: string;
}
