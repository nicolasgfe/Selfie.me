import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioEmpresaDto } from "src/dto";
import { UsuarioEmpresa } from "src/entity";
import { Repository } from "typeorm";

@Injectable()
export class usuarioEmpresaRepository {
  constructor(
    @InjectRepository(UsuarioEmpresa)
    private readonly usuarioEmpresaRepository: Repository<UsuarioEmpresa>,
  ) {}

  async create(createUsuarioEmpresaDto: CreateUsuarioEmpresaDto) {
    const usuarioEmpresaDto = { ...createUsuarioEmpresaDto };
    const usuarioEmpresa = this.usuarioEmpresaRepository.create(usuarioEmpresaDto);
    return this.usuarioEmpresaRepository.save(usuarioEmpresa);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioEmpresaRepository.delete(id);
  }

  async findAll(): Promise<UsuarioEmpresa[]> {
    return this.usuarioEmpresaRepository.find();
  }

  async findById(id: number): Promise<UsuarioEmpresa> {
    return this.usuarioEmpresaRepository.findOneBy({ id_usuarioEmpresa: id });
  }
}