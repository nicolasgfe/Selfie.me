import { Injectable, NotFoundException } from '@nestjs/common';
import { Plano } from 'src/entity';
import { CreatePlanoDto } from 'src/dto';
import { PlanosRepository } from 'src/repository';

@Injectable()
export class PlanoService {
  constructor(private readonly planosRepository: PlanosRepository) {}

  async findAll(): Promise<Plano[]> {
    return this.planosRepository.findAll();
  }

  async findById(id_plano: number): Promise<Plano> {
    const plano = await this.planosRepository.findById(id_plano);
    if (!plano) {
      throw new NotFoundException(`Plano com ID ${id_plano} não encontrada`);
    }
    return plano;
  }

  async create(createPlanoDto: CreatePlanoDto): Promise<Plano> {
    return this.planosRepository.create(createPlanoDto);
  }
}
