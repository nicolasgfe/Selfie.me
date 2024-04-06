import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Midia } from 'src/entity';
import { MidiaService } from 'src/service';

@Controller('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService) {}

  @Get("/")
  async findAll(): Promise<Midia[]> {
    return this.midiaService.findAll();
  }

  @Get("/:id_midia")
  async findById(@Req() request: Request): Promise<Midia> {
    const { id_midia } = request.params;
    return this.midiaService.findById(Number(id_midia));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<Midia> {
    const createMidiaDto = request.body;
    return this.midiaService.create(createMidiaDto);
  } 
}
