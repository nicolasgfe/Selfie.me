import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioController } from 'src/controllers';
import { Comentario } from 'src/entity';
import { ComentarioRepository } from 'src/repository';
import { ComentarioService } from 'src/service';


@Module({
    imports: [TypeOrmModule.forFeature([Comentario])],
    controllers: [ComentarioController],
    providers: [ComentarioService, ComentarioRepository],
})
export class ComentarioModule {}