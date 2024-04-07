import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreatePerfilDto } from 'src/dto';
import { Perfil } from 'src/entity';
import { PerfilService } from 'src/service/perfil';

@Controller('perfil')
@ApiTags('Perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Get("/")
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  async findAll(): Promise<Perfil[]> {
    return this.perfilService.findAll();
  }

  @Get("/:id_perfil")
  @ApiParam({ name: 'id_empresa', description: 'ID da empresa a ser recuperada' })
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada.' })
  async findById(@Req() request: Request): Promise<Perfil> {
    const { id_perfil } = request.params;
    return this.perfilService.findById(Number(id_perfil));
  }

  @Post("/")
  @ApiOperation({ summary: 'Criar nova empresa', description: 'Criação de nova empresa com base nos dados fornecidos.' })
  @ApiBody({ type: CreatePerfilDto })
  async create(@Req() request: Request): Promise<Perfil> {
    const createPerfilDto = request.body;
    return this.perfilService.create(createPerfilDto);
  }
}


