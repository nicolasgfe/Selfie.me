import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Empresa } from 'src/entity';
import { EmpresaService } from 'src/service';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get("/")
  async findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Get("/:id_empresa")
  async findById(@Req() request: Request): Promise<Empresa> {
    const { id_empresa } = request.params;
    return this.empresaService.findById(Number(id_empresa));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<Empresa> {
    const createEmpresaDto = request.body;
    return this.empresaService.create(createEmpresaDto);
  }
}
