import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Perfil } from 'src/entity';
import { PerfilService } from 'src/service/perfil';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get("/")
  async findAll(): Promise<Perfil[]> {
    return this.perfilService.findAll();
  }

  @Get("/:id_perfil")
  async findById(@Req() request: Request): Promise<Perfil> {
    const { id_perfil } = request.params;
    return this.perfilService.findById(Number(id_perfil));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<Perfil> {
    const createPerfilDto = request.body;
    return this.perfilService.create(createPerfilDto);
  } 
}
