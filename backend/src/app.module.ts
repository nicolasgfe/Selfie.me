import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario, Empresa, Licenca, Perfil, Plano, Usuario } from './entity';
import { ComentarioModule, EmpresaModule, LicencaModule, PerfilModule, PlanoModule, UsuarioModule } from './module';

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
        Licenca
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
    UsuarioModule,
    PerfilModule,
    ComentarioModule,
    LicencaModule
  ],
})
export class AppModule {}
