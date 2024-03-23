import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plano } from './entity';
import { PlanoModule } from './module';

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
      entities: [Plano],
      synchronize: true,
    }),
    PlanoModule
  ],
})
export class AppModule {}
