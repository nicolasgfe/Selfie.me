import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Empresa,
  Midia,
  Licenca,
  Perfil,
  Plano,
  Publicacao,
  Usuario
} from './entity';
import {
  EmpresaModule,
  MidiaModule,
  LicencaModule,
  PerfilModule,
  PlanoModule,
  PublicacaoModule,
  UsuarioModule
} from './module';

require('dotenv/config');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Plano,
        Empresa,
        Usuario,
        Perfil,
        Publicacao,
        Midia,,
        Licenca
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
    UsuarioModule,
    PerfilModule,
    PublicacaoModule,
    MidiaModule,
    LicencaModule
  ],
})
export class AppModule {}
