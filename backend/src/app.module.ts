import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa, Plano } from './entity';
import { PlanoModule } from './module';
import { EmpresaModule } from './module/empresa';

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
      ],
      synchronize: true,
    }),
    PlanoModule,
    EmpresaModule,
  ],
})
export class AppModule {}
