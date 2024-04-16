import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Midia } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateMidiaDto } from 'src/dto';

@Injectable()
export class MidiaRepository {
  constructor(
    @InjectRepository(Midia)
    private readonly midiaRepository: Repository<Midia>,
  ) {}

  async findAll(): Promise<Midia[]> {
    return this.midiaRepository.find({
      relations: {
        publicacao: true
      }
    });
  }

  async findById(id_midia: number): Promise<Midia> {
    return this.midiaRepository.findOne({
      where: {
        id_midia
      },
      relations: {
        publicacao: true
      }
    })
  }

  async create(createMidiaDto: CreateMidiaDto): Promise<Midia> {
    const novaMidia = { ...createMidiaDto, criadoEm: new Date(), atualizadoEm: new Date() }
    const Midia = this.midiaRepository.create(novaMidia);
    return this.midiaRepository.save(Midia);
  }
}
