import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Usuario } from 'src/entity';

export class CreatePerfilDto {
  @IsNotEmpty()
  @ApiProperty()
  usuario: Usuario;
}
