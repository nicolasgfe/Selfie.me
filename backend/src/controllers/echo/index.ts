import { Controller, Get, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('echo')
@ApiTags('Echo')
export class EchoController {
  @Get("/")
  @ApiResponse({ status: 200, description: 'Consulta realizada com sucesso.' })
  async echo() {
    return { message: 'Consulta realizada com sucesso' }
  }
}
