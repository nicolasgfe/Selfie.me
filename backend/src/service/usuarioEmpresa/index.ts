import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUsuarioEmpresaDto } from "src/dto";
import { UsuarioEmpresa } from "src/entity";
import { usuarioEmpresaRepository } from "src/repository";

@Injectable()
export class UsuarioEmpresaService {
  constructor(
    private readonly usuarioEmpresaRepository: usuarioEmpresaRepository
  ) {}

  async create(createUsuarioEmpresaDto: CreateUsuarioEmpresaDto): Promise<UsuarioEmpresa> {
    return this.usuarioEmpresaRepository.create(createUsuarioEmpresaDto);
  }

  async findAll(): Promise<UsuarioEmpresa[]> {
    return this.usuarioEmpresaRepository.findAll();
  }

  async findById(id: number): Promise<UsuarioEmpresa> {
    const usuarioEmpresa = await this.usuarioEmpresaRepository.findById(id);
    if (!usuarioEmpresa) {
      throw new NotFoundException(`Relacionamento usuarioEmpresa com ID ${id} não encontrada`);
    }
    return usuarioEmpresa;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioEmpresaRepository.remove(id);
  }
}