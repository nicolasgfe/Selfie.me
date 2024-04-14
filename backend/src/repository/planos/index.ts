import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plano } from 'src/entity';
import { CreatePlanoDto } from 'src/dto';

@Injectable()
export class PlanosRepository {
  constructor(
    @InjectRepository(Plano)
    private readonly planoRepository: Repository<Plano>,
  ) {}

  async findAll(): Promise<Plano[]> {
    return this.planoRepository.find();
  }

  async findById(id_plano: number): Promise<Plano> {
    return this.planoRepository.findOne({
      where: { id_plano: id_plano }
    });
  }

  async create(createPlanoDto: CreatePlanoDto): Promise<Plano> {
    const user = this.planoRepository.create(createPlanoDto);
    return this.planoRepository.save(user);
  }
}
