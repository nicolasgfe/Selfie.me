import { IsNotEmpty } from 'class-validator';
import { Usuario } from 'src/entity';

export class CreatePerfilDto {
  @IsNotEmpty()
  usuario: Usuario;
}
