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
  EchoModule,
  EmpresaModule,
  LicencaModule,
  MidiaModule,
  PerfilModule,
  PlanoModule,
  PublicacaoModule,
  UsuarioModule
} from './module';
import { CriarTabelaUsuario1715986183875 } from './database/migrations/1715986183875-CriarTabelaUsuario';

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
      migrations: [CriarTabelaUsuario1715986183875],
      migrationsTableName: "src/database/migrations",
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
    }),
    EchoModule,
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
