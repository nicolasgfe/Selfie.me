import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLicencaDto } from 'src/dto';
import { Licenca } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class LicencaRepository {
    constructor(
        @InjectRepository(Licenca)
        private readonly licencaRepository: Repository<Licenca>,
    ) {}

    async findAll(): Promise<Licenca[]> {
        return this.licencaRepository.find({
        relations: {
            perfil: true
        }
        });
    }

    async findById(id_licenca: number): Promise<Licenca> {
        return this.licencaRepository.findOne({
        where: {
            id_licenca
        },
        relations: {
            perfil: true
        }
        })
    }

    async create(createLicencaDto: CreateLicencaDto): Promise<Licenca> {
        const licenca = this.licencaRepository.create(createLicencaDto);
        return this.licencaRepository.save(licenca);
    }
}
