import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLicencaDto } from 'src/dto';
import { Licenca } from 'src/entity';
import { LicencaRepository } from 'src/repository';

@Injectable()
export class LicencaService {
    constructor(private readonly licencaRepository: LicencaRepository) {}

    async findAll(): Promise<Licenca[]> {
        return this.licencaRepository.findAll();
    }

    async findById(id_licenca: number): Promise<Licenca> {
        const licenca = await this.licencaRepository.findById(id_licenca);
        if (!licenca) {
        throw new NotFoundException(`Licença com ID ${id_licenca} não encontrada`);
        }
        return licenca;
    }

    async create(createLicencaDto: CreateLicencaDto): Promise<Licenca> {
        return this.licencaRepository.create(createLicencaDto);
    }
}
