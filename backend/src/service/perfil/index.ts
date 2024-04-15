import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePerfilDto } from "src/dto/perfil";
import { Perfil } from "src/entity/perfil";
import { PerfilRepository } from "src/repository";

@Injectable()
export class PerfilService {
    constructor(private readonly perfilRepository: PerfilRepository) {}

    async findAll(): Promise<Perfil[]> {
        return this.perfilRepository.findAll();
    }

    async findById(id_perfil: number): Promise<Perfil> {
        const perfil = await this.perfilRepository.findById(id_perfil);

        if (!perfil) {
            throw new NotFoundException(`Perfil com ID ${id_perfil} não encontrado`);
        }

        return perfil;
    }

    async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
        return this.perfilRepository.create(createPerfilDto);
    }
}