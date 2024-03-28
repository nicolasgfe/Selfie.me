import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/dto/empresa';
import { Empresa } from 'src/entity/empresa';
import { EmpresaRepository } from 'src/repository/empresa';

@Injectable()
export class EmpresaService {
  constructor(private readonly empresaRepository: EmpresaRepository) {}

  async findAll(): Promise<Empresa[]> {
    return this.empresaRepository.findAll();
  }

  // async findById(id: number): Promise<Plano> {
  //   const user = await this.planosRepository.findById(id);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   return user;
  // }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaRepository.create(createEmpresaDto);
  }
}
