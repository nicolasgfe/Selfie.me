import { IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome: string;


  sobrenome: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  atualizadoEm: Date;

  @IsNotEmpty()
  criadoEm: Date;
}
