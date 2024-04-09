import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Licenca } from 'src/entity';
import { LicencaService } from 'src/service';

@Controller('licenca')
export class LicencaController {
    constructor(private readonly licencaService: LicencaService) {}

    @Get("/")
    async findAll(): Promise<Licenca[]> {
        return this.licencaService.findAll();
    }

    @Get("/:id_licenca")
    async findById(@Req() request: Request): Promise<Licenca> {
        const { id_licenca } = request.params;
        return this.licencaService.findById(Number(id_licenca));
    }

    @Post("/")
    async create(@Req() request: Request): Promise<Licenca> {
        const createLicencalDto = request.body;
        return this.licencaService.create(createLicencalDto);
    } 
}
