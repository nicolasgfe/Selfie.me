import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plano } from './entity';
import { PlanoModule } from './module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nicolasg.fernandes',
      password: 'postgres',
      database: 'selfime',
      entities: [Plano],
      synchronize: true,
    }),
    PlanoModule
  ],
})
export class AppModule {}
