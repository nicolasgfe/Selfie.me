import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MidiaController } from 'src/controllers';
import { Midia } from 'src/entity';
import { MidiaRepository } from 'src/repository';
import { MidiaService } from 'src/service';

@Module({
  imports: [TypeOrmModule.forFeature([Midia])],
  controllers: [MidiaController],
  providers: [MidiaService, MidiaRepository],
})
export class MidiaModule {}
