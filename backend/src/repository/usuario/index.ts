import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from 'src/dto';
import { Usuario } from 'src/entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findById(id_usuario: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id_usuario });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuarioDto = { ...createUsuarioDto, criadoEm: new Date(), atualizadoEm: new Date(), status: true }
    const usuario = this.usuarioRepository.create(usuarioDto);
    return this.usuarioRepository.save(usuario);
  }
}
