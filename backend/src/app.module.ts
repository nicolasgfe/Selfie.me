import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa, Midia, Perfil, Plano, Publicacao, Usuario } from './entity';
import { EmpresaModule, PerfilModule, PlanoModule, PublicacaoModule, UsuarioModule } from './module';
import { MidiaModule } from './module';

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
        Midia,
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
    UsuarioModule,
    PerfilModule,
    PublicacaoModule,
    MidiaModule,
  ],
})
export class AppModule {}
