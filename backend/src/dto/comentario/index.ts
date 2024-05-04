import { IsNotEmpty } from 'class-validator';

export class CreateComentarioDto {
    @IsNotEmpty()
    conteudo: string;

    @IsNotEmpty()
    idMidia: number;

    @IsNotEmpty()
    idPublicacao: number;

    @IsNotEmpty()
    idSubComentario: number;
}
