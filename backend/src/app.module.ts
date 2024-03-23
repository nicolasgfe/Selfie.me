import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nicolasg.fernandes',
      password: 'postgres',
      database: 'selfime',
      entities: [],
      migrations: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
