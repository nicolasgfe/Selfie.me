import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePublicacaoDto } from 'src/dto';
import { Publicacao } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicacaoRepository {
  constructor(
    @InjectRepository(Publicacao)
    private readonly publicacaoRepository: Repository<Publicacao>,
  ) {}

  async findAll(): Promise<Publicacao[]> {
    return this.publicacaoRepository.find();
  }

  async findById(id_publicacao: number): Promise<Publicacao> {
    return this.publicacaoRepository.findOne({
      where: {
        id_publicacao: id_publicacao
      },
      relations: {
        perfil: true
      }
    });
  }

  async create(createPublicacaoDto: CreatePublicacaoDto): Promise<Publicacao> {
    const user = this.publicacaoRepository.create(createPublicacaoDto);
    return this.publicacaoRepository.save(user);
  }

  async delete(id_publicacao: number) {
    this.publicacaoRepository.delete({ id_publicacao });
  }
}
