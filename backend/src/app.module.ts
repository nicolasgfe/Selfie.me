import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Comentario,
  Empresa,
  Licenca,
  Midia,
  Perfil,
  Plano,
  Publicacao,
  Usuario
} from './entity';
import {
  ComentarioModule,
  EmpresaModule,
  LicencaModule,
  MidiaModule,
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
        Comentario,
        Licenca,
        Publicacao,
        Midia,
        Licenca
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
    UsuarioModule,
    PerfilModule,
    ComentarioModule,
    LicencaModule,
    PublicacaoModule,
    MidiaModule,
  ],
})
export class AppModule {}
