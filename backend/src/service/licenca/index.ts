import { Injectable, NotFoundException, Req } from '@nestjs/common';
import { CreateEmpresaDto } from 'src/dto/empresa';
import { Empresa } from 'src/entity/empresa';
import { EmpresaRepository } from 'src/repository/empresa';

@Injectable()
export class LicencaService {
    constructor(private readonly licencaRepository: LicencaRepository) {}

    async findAll(): Promise<Licenca[]> {

        return this.licencaRepository.findAll();
    }

    async findById(id_licenca: number): Promise<Licenca> {
        const licenca = await this.licencaRepository.findById(id_empresa);
        if (!licenca) {
        throw new NotFoundException(`Licença com ID ${id_licenca} não encontrada`);
        }
        return licenca;
    }
    async create(createLicencaDto: createLicencaDto): Promise<Licenca> {
        return this.licencaRepository.create(createLicencaDto);
    }
}
