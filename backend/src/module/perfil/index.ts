import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerfilController } from 'src/controllers/perfil';
import { Perfil } from 'src/entity';
import { PerfilRepository } from 'src/repository';
import { PerfilService } from 'src/service/perfil';

@Module({
  imports: [TypeOrmModule.forFeature([Perfil])],
  controllers: [PerfilController],
  providers: [PerfilService, PerfilRepository],
})
export class PerfilModule {}
