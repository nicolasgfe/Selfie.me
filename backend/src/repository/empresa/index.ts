import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmpresaDto } from 'src/dto/empresa';
import { Empresa } from 'src/entity/empresa';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaRepository {
  constructor(
    @InjectRepository(Empresa)
    private readonly pempresaRepository: Repository<Empresa>,
  ) {}

  async findAll(): Promise<Empresa[]> {
    return this.pempresaRepository.find();
  }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const user = this.pempresaRepository.create(createEmpresaDto);
    return this.pempresaRepository.save(user);
  }
}
