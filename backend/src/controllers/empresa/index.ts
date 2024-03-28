import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/dto';
import { Empresa } from 'src/entity';
import { EmpresaService } from 'src/service';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaService.create(createEmpresaDto);
  }
}
