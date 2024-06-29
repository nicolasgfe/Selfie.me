import { Module } from '@nestjs/common';
import { EchoController } from 'src/controllers';

@Module({
  controllers: [EchoController],
})
export class EchoModule {}
