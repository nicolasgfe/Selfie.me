import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Perfil } from 'src/entity';
import { Repository } from 'typeorm';
import { CreatePerfilDto } from 'src/dto';

@Injectable()
export class PerfilRepository {
  constructor(
    @InjectRepository(Perfil)
    private readonly perfilRepository: Repository<Perfil>,
  ) {}

  async findAll(): Promise<Perfil[]> {
    return this.perfilRepository.find({
      relations: {
        usuario: true
      }
    });
  }

  async findById(id_perfil: number): Promise<Perfil> {
    return this.perfilRepository.findOne({
      where: {
        id_perfil
      },
      relations: {
        usuario: true
      }
    })
  }

  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    const perfil = this.perfilRepository.create(createPerfilDto);
    return this.perfilRepository.save(perfil);
  }
}
