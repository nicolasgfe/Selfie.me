import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioDto } from "src/dto";
import { Usuario } from "src/entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioRepository {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        const usuarioDto = { 
            ...createUsuarioDto, 
            criadoEm: new Date(), 
            atualizadoEm: new Date(), 
            status: true 
        };
        const usuario = this.usuarioRepository.create(usuarioDto);
        return this.usuarioRepository.save(usuario);
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOneBy({ id_usuario: id });
    }
}