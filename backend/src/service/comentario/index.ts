import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateComentarioDto } from 'src/dto/comentario';
import { Comentario } from 'src/entity/comentario';
import { ComentarioRepository } from 'src/repository/comentario';

@Injectable()
export class ComentarioService {
    constructor(private readonly comentarioRepository: ComentarioRepository) {}

    async findAll(): Promise<Comentario[]> {
        return this.comentarioRepository.findAll();
    }

    async findById(id_comentario: number): Promise<Comentario> {
        const comentario = await this.comentarioRepository.findById(id_comentario);
        if (!comentario) {
        throw new NotFoundException(`Comentario com ID ${id_comentario} não encontrado`);
        }
        return comentario;
    }

    async create(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
        return this.comentarioRepository.create(createComentarioDto);
    }
}
