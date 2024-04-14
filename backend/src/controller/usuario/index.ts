import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/dto';
import { Usuario } from 'src/entity';
import { UsuarioRepository } from 'src/repository';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly repository: UsuarioRepository) {}

    @Post('/create')
    async create(@Res() res, @Body() createUsuariodto: CreateUsuarioDto): Promise<Usuario> {
        await this.repository.create(createUsuariodto);
        return res.status(HttpStatus.CREATED).send();
    }

    @Post('/remove')
    async remove(@Res() res, @Body() id: number) {
        await this.repository.remove(id);
        return res.status(HttpStatus.OK).send();
    }

    @Post('/findAll')
    async findAll(@Res() res) {
        const usuarios = await this.repository.findAll();
        return res.status(HttpStatus.OK).send(usuarios);
    }

    @Post('/findOne')
    async findOne(@Res() res, @Body() id: number) {
        const usuario = await this.repository.findById(id);
        return res.status(HttpStatus.OK).send(usuario);
    }

}