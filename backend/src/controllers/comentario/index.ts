import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Comentario } from 'src/entity/comentario';
import { ComentarioService } from 'src/service/comentario';

@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) {}

    @Get("/")
    async findAll(): Promise<Comentario[]> {
        return this.comentarioService.findAll();
    }

    @Get("/:id_comentario")
    async findById(@Req() request: Request): Promise<Comentario> {
        const { id_comentario } = request.params;
        return this.comentarioService.findById(Number(id_comentario));
    }

    @Post("/")
    async create(@Req() request: Request): Promise<Comentario> {
        const createComentarioDto = request.body;
        return this.comentarioService.create(createComentarioDto);
    } 
}
