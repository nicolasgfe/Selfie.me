import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicencaController } from 'src/controllers/licenca';
import { Licenca } from 'src/entity';
import { LicencaRepository } from 'src/repository/licenca';
import { LicencaService } from 'src/service/licenca';

@Module({
    imports: [TypeOrmModule.forFeature([Licenca])],
    controllers: [LicencaController],
    providers: [LicencaService, LicencaRepository],
})
export class LicencaModule {}