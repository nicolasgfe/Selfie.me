import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaController } from 'src/controllers';
import { Empresa } from 'src/entity';
import { EmpresaRepository } from 'src/repository';
import { EmpresaService } from 'src/service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController],
  providers: [EmpresaService, EmpresaRepository],
})
export class EmpresaModule {}
