import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
      return this.usuarioRepository.create(createUsuarioDto);
    }

    async findAll(): Promise<Usuario[]> {
        return this.usersRepository.findAll();
    }

    async findById(id_usuario: number): Promise<Usuario> {
      const usuario = await this.usuarioRepository.findById(id_usuario);
      if (!usuario) {
        throw new NotFoundException(`Usuario com ID ${id_usuario} não encontrada`);
      }
      return usuario;
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
