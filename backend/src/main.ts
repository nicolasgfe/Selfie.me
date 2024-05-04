import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Selfie.me - Unisep')
    .setDescription('Api para aplicação de fotografias <br/>Desenvolvido por alunos do 5º semestre de Analise e Desenvolvimento de Sistemas.')
    .setVersion('1.0')
    .addTag('Selfie.me')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap();
