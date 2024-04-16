import { IsNotEmpty } from "class-validator";
import { Empresa, Usuario } from "src/entity";

export class CreateUsuarioEmpresaDto {
  @IsNotEmpty()
  usuario: Usuario;

  @IsNotEmpty()
  empresa: Empresa;
}