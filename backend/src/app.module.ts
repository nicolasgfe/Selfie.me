import { Module } from '@nestjs/common';
import { PlanoModule } from './module';

@Module({
  imports: [PlanoModule],
})
export class AppModule {}
