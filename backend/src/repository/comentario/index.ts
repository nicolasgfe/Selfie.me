import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateComentarioDto } from 'src/dto/comentario';
import { Comentario } from 'src/entity/comentario';
import { Repository } from 'typeorm';

@Injectable()
export class ComentarioRepository {
    constructor(
        @InjectRepository(Comentario)
        private readonly comentarioRepository: Repository<Comentario>,
    ) {}

    async findAll(): Promise<Comentario[]> {
        return this.comentarioRepository.find({
        relations: {
            midia: true,
            publicacao: true,
            subComentario: true
        }
        });
    }

    async findById(id_comentario: number): Promise<Comentario> {
        return this.comentarioRepository.findOne({
        where: {
            id_comentario
        },
        relations: {
            midia: true,
            publicacao: true,
            subComentario: true
        }
        })
    }

    async create(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
        const comentario = this.comentarioRepository.create(createComentarioDto);
        return this.comentarioRepository.save(comentario);
    }
}
