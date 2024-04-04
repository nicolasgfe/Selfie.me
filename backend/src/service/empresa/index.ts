import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/dto/empresa';
import { Empresa } from 'src/entity/empresa';
import { EmpresaRepository } from 'src/repository/empresa';

@Injectable()
export class EmpresaService {
  constructor(private readonly empresaRepository: EmpresaRepository) {}

  async findAll(): Promise<Empresa[]> {
    return this.empresaRepository.findAll();
  }

  async findById(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findById(id);
    if (!empresa) {
      throw new NotFoundException('empresa not found');
    }
    return empresa;
  }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaRepository.create(createEmpresaDto);
  }
}
