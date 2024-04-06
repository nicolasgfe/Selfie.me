import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa, Perfil, Plano, Usuario } from './entity';
import { EmpresaModule, PerfilModule, PlanoModule, UsuarioModule } from './module';

require('dotenv/config');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.APP_USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        Plano,
        Empresa,
        Usuario,
        Perfil
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
    UsuarioModule,
    PerfilModule,
  ],
})
export class AppModule {}
