import { IsNotEmpty } from 'class-validator';

export class CreateLicencaDto {
    @IsNotEmpty()
    validade: Date;

    @IsNotEmpty()
    idPerfil: number;

    @IsNotEmpty()
    todosAdquiridos: boolean;
}
