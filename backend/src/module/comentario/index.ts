import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioController } from 'src/controllers/comentario';
import { Comentario } from 'src/entity/comentario';
import { ComentarioRepository } from 'src/repository/comentario';
import { ComentarioService } from 'src/service/comentario';

@Module({
    imports: [TypeOrmModule.forFeature([Comentario])],
    controllers: [ComentarioController],
    providers: [ComentarioService, ComentarioRepository],
})
export class LicencaModule {}