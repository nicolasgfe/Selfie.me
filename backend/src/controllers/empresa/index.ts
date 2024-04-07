import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateEmpresaDto } from 'src/dto';
import { Empresa } from 'src/entity';
import { EmpresaService } from 'src/service';

@Controller('empresa')
@ApiTags('Empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get("/")
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  async findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Get("/:id_empresa")
  @ApiParam({ name: 'id_empresa', description: 'ID da empresa a ser recuperada' })
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada.' })
  async findById(@Req() request: Request): Promise<Empresa> {
    const { id_empresa } = request.params;
    return this.empresaService.findById(Number(id_empresa));
  }

  @Post("/")
  @ApiOperation({ summary: 'Criar nova empresa', description: 'Criação de nova empresa com base nos dados fornecidos.' })
  @ApiBody({ type: CreateEmpresaDto })
  @ApiResponse({ status: 201, description: 'Empresa criada com sucesso.' })
  async create(@Req() request: Request): Promise<Empresa> {
    const createEmpresaDto = request.body;
    return this.empresaService.create(createEmpresaDto);
  }
}
