import { IsNotEmpty } from 'class-validator';
import { Publicacao, Usuario } from 'src/entity';
import { JoinColumn, OneToMany } from 'typeorm';

export class CreateMidiaDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  base: string;

  @IsNotEmpty()
  formato: string;

  @IsNotEmpty()
  status: boolean;

  @IsNotEmpty()
  usuario: Usuario;

  @IsNotEmpty()
  valor: number;
}
