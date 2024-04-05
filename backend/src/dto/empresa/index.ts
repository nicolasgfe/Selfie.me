import { IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  status: boolean;
}
