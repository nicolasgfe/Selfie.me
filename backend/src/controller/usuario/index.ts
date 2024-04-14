import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/dto';
import { Usuario } from 'src/entity';
import { UsuarioRepository } from 'src/repository';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly repository: UsuarioRepository) {}

    @Post('/')
    async create(@Res() res, @Body() createUsuariodto: CreateUsuarioDto): Promise<Usuario> {
        await this.repository.create(createUsuariodto);
        return res.status(HttpStatus.CREATED).send();
    }

    @Delete('/')
    async remove(@Res() res, @Body() id: number) {
        await this.repository.remove(id);
        return res.status(HttpStatus.OK).send();
    }

    @Get('/')
    async findAll(@Res() res) {
        const usuarios = await this.repository.findAll();
        return res.status(HttpStatus.OK).send(usuarios);
    }

    @Get('/:id_empresa')
    async findOne(@Req() id_empresa: number, @Res() res) {
        const usuario = await this.repository.findById(id_empresa);
        return res.status(HttpStatus.OK).send(usuario);
    }

}