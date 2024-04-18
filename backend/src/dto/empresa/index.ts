import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpresaDto {
  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @ApiProperty()
  status: boolean;
}
