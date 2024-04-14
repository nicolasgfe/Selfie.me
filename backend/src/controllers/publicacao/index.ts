import { Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Publicacao } from 'src/entity';
import { PublicacaoService } from 'src/service';

@Controller('publicacao')
export class PublicacaoController {
  constructor(private readonly publicacaoService: PublicacaoService) {}

  @Get("/")
  async findAll(): Promise<Publicacao[]> {
    return this.publicacaoService.findAll();
  }

  @Get("/:id_publicacao")
  async findById(@Req() request: Request): Promise<Publicacao> {
    const { id_publicacao } = request.params;
    return this.publicacaoService.findById(Number(id_publicacao));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<Publicacao> {
    const createPublicacaoDto = request.body;
    return this.publicacaoService.create(createPublicacaoDto);
  }

  @Delete("/")
  async delete(@Req() request: Request): Promise<void> {
    const { id_publicacao } = request.params;
    await this.publicacaoService.delete(Number(id_publicacao));
    return
  }
}
