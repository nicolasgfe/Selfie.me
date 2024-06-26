import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateUsuarioDto } from 'src/dto';
import { Usuario } from 'src/entity';
import { UsuarioService } from 'src/service';

@Controller('usuario')
@ApiTags('Plano')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get("/")
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get("/:id_usuario")
  @ApiParam({ name: 'id_usuario', description: 'ID do usuario a ser recuperada' })
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Usuario não encontrado.' })
  async findById(@Req() request: Request): Promise<Usuario> {
    const { id_usuario } = request.params;
    return this.usuarioService.findById(Number(id_usuario));
  }

  @Post("/")
  @ApiOperation({ summary: 'Criar novo usuario', description: 'Criação de novo usuario com base nos dados fornecidos.' })
  @ApiBody({ type: CreateUsuarioDto })
  async create(@Req() request: Request): Promise<Usuario> {
    const createUsuarioDto = request.body;
    return this.usuarioService.create(createUsuarioDto);
  }
}
