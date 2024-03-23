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

    findAll(): Promise<Usuario[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<Usuario | null> {
        return this.usersRepository.findOneBy({ id_usuario: id });
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}