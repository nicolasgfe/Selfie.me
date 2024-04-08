import { Injectable } from '@nestjs/common';
import { Plano } from 'src/entity';
import { CreatePlanoDto } from 'src/dto';
import { PlanosRepository } from 'src/repository';

@Injectable()
export class PlanoService {
  constructor(private readonly planosRepository: PlanosRepository) {}

  async findAll(): Promise<Plano[]> {
    return this.planosRepository.findAll();
  }

  async create(createPlanoDto: CreatePlanoDto): Promise<Plano> {
    return this.planosRepository.create(createPlanoDto);
  }
}
