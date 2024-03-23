import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuariodto } from "src/dto/usuario";
import { Usuario } from "src/entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioRepository { 
    constructor(
        @InjectRepository(Usuario) private repository: Repository<Usuario>,
    ) {}

    async create(createUsuariodto: CreateUsuariodto) {
        const entity = this.repository.create(createUsuariodto);
        await this.repository.save(entity);
    }

    async remove(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findAll(): Promise<Usuario[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Usuario | null> {
        return this.repository.findOneBy({ id_usuario: id });
    }
}