import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicacaoDto } from 'src/dto';
import { Publicacao } from 'src/entity';
import { PublicacaoRepository } from 'src/repository/publicacao';

@Injectable()
export class PublicacaoService {
  constructor(private readonly publicacaoRepository: PublicacaoRepository) {}

  async findAll(): Promise<Publicacao[]> {
    return this.publicacaoRepository.findAll();
  }

  async findById(id_publicacao: number): Promise<Publicacao> {
    const publicacao = await this.publicacaoRepository.findById(id_publicacao);
    if (!publicacao) {
      throw new NotFoundException(`Publicacao com ID ${id_publicacao} não encontrada`);
    }
    return publicacao;
  }

  async create(createPublicacaoDto: CreatePublicacaoDto): Promise<Publicacao> {
    return this.publicacaoRepository.create(createPublicacaoDto);
  }

  async delete(id_publicacao: number): Promise<void> {
    this.publicacaoRepository.delete(id_publicacao);
  }
}
