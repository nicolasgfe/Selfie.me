import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/dto/Usuario';
import { Usuario } from 'src/entity';
import { UsuarioRepository } from 'src/repository/usuario';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

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
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.create(createUsuarioDto);
  }
}
