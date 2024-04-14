import { IsNotEmpty } from 'class-validator';
import { Perfil } from 'src/entity';

export class CreatePublicacaoDto {
  @IsNotEmpty()
  perfil: Perfil;

  @IsNotEmpty()
  descricao: string;
}
