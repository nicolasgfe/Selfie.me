import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmpresaDto } from 'src/dto/empresa';
import { Empresa } from 'src/entity/empresa';
import { Repository } from 'typeorm';

@Injectable()
export class EmpresaRepository {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  async findById(id_empresa: number): Promise<Empresa> {
    return this.empresaRepository.findOneBy({ id_empresa });
  }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const createEmpresa = { ...createEmpresaDto, status: true };

    const user = this.empresaRepository.create(createEmpresa);
    return this.empresaRepository.save(user);
  }
}
