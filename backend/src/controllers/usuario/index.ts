import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Usuario } from 'src/entity';
import { UsuarioService } from 'src/service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get("/")
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get("/:id_usuario")
  async findById(@Req() request: Request): Promise<Usuario> {
    const { id_usuario } = request.params;
    return this.usuarioService.findById(Number(id_usuario));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<Usuario> {
    const createUsuarioDto = request.body;
    return this.usuarioService.create(createUsuarioDto);
  }
}
