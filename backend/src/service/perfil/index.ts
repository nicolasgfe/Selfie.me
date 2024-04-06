import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreatePerfilDto } from 'src/dto';
import { Perfil } from 'src/entity';
import { PerfilRepository } from 'src/repository/perfil';

@Injectable()
export class PerfilService {
  constructor(private readonly perfilRepository: PerfilRepository) {}

  async findAll(): Promise<Perfil[]> {
    return this.perfilRepository.findAll();
  }

  async findById(id_perfil: number): Promise<Perfil> {
    const perfil = await this.perfilRepository.findById(id_perfil);
    if (!perfil) {
      throw new NotFoundException(`Perfil com ID ${id_perfil} não encontrada`);
    }
    return perfil;
  }

  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    return this.perfilRepository.create(createPerfilDto);
  }
}
