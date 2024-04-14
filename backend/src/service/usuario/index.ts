import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from 'src/dto';
import { Usuario } from 'src/entity';
import { UsuarioRepository } from 'src/repository';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: UsuarioRepository,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.create(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.findAll();
  }

  async findById(id_usuario: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findById(id_usuario);
    if (!usuario) {
      throw new NotFoundException(`Usuario com ID ${id_usuario} não encontrada`);
    }
    return usuario;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.remove(id);
  }
}
