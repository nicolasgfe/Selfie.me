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

  async findById(id_empresa: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findById(id_empresa);
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${id_empresa} não encontrada`);
    }
    return empresa;
  }
  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaRepository.create(createEmpresaDto);
  }
}
