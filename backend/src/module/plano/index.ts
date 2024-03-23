import { Module } from '@nestjs/common';
import { PlanoService } from 'src/service';
import { PlanosRepository } from 'src/repository';
import { PlanoController } from 'src/controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plano } from 'src/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  controllers: [PlanoController],
  providers: [PlanoService, PlanosRepository],
})
export class PlanoModule {}
