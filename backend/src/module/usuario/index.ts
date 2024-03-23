import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from 'src/controller';
import { Usuario } from 'src/entity';
import { UsuarioRepository } from 'src/repository/usuario';
import { UsuarioService } from 'src/service/usuario';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository],
})
export class UsuarioModule {}