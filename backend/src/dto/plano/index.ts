import { IsNotEmpty } from 'class-validator';

export class CreatePlanoDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  valor: number;

  @IsNotEmpty()
  validade: Date;
}
