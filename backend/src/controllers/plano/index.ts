import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlanoService } from 'src/service';
import { Plano } from 'src/entity';
import { CreatePlanoDto } from 'src/dto';

@Controller('plano')
export class PlanoController {
  constructor(private readonly planosService: PlanoService) {}

  @Get()
  async findAll(): Promise<Plano[]> {
    return this.planosService.findAll();
  }

  @Post()
  async create(@Body() createPlanoDto: CreatePlanoDto): Promise<Plano> {
    return this.planosService.create(createPlanoDto);
  }
}
