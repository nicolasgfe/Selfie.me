import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlanoService } from 'src/service';
import { Plano } from 'src/entity';
import { CreatePlanoDto } from 'src/dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('plano')
@ApiTags('Plano')
export class PlanoController {
  constructor(private readonly planosService: PlanoService) {}

  @Get("/")
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  async findAll(): Promise<Plano[]> {
    return this.planosService.findAll();
  }

  @Get("/:id_plano")
  @ApiParam({ name: 'id_plano', description: 'ID do plano a ser recuperada' })
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Plano não encontrada.' })
  async findById(id_plano: number): Promise<Plano> {
    return this.planosService.findById(id_plano);
  }

  @Post("/")
  @ApiOperation({ summary: 'Criar novo plano', description: 'Criação de novo plano com base nos dados fornecidos.' })
  @ApiBody({ type: CreatePlanoDto })
  async create(@Body() createPlanoDto: CreatePlanoDto): Promise<Plano> {
    return this.planosService.create(createPlanoDto);
  }
}
