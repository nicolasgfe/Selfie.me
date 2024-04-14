import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateMidiaDto } from 'src/dto';
import { Midia } from 'src/entity';
import { MidiaRepository } from 'src/repository';

@Injectable()
export class MidiaService {
  constructor(private readonly midiaRepository: MidiaRepository) {}

  async findAll(): Promise<Midia[]> {
    return this.midiaRepository.findAll();
  }

  async findById(id_midia: number): Promise<Midia> {
    const midia = await this.midiaRepository.findById(id_midia);
    if (!midia) {
      throw new NotFoundException(`Midia com ID ${id_midia} não encontrada`);
    }
    return midia;
  }

  async create(createMidiaDto: CreateMidiaDto): Promise<Midia> {
    return this.midiaRepository.create(createMidiaDto);
  }
}
