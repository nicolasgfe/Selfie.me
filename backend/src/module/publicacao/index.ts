import { Module } from '@nestjs/common';
import { PublicacaoRepository } from 'src/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacao } from 'src/entity';
import { PublicacaoService } from 'src/service';
import { PublicacaoController } from 'src/controllers';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacao])],
  controllers: [PublicacaoController],
  providers: [PublicacaoService, PublicacaoRepository],
})
export class PublicacaoModule {}
