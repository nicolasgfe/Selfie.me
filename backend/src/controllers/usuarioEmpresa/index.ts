import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { UsuarioEmpresa } from "src/entity";
import { UsuarioEmpresaService } from "src/service";

@Controller('usuario-empresas')
export class UsuarioEmpresaController {
  constructor(private readonly usuarioEmpresaService: UsuarioEmpresaService) {}

  @Get("/")
  async findAll(): Promise<any> {
    return this.usuarioEmpresaService.findAll();
  }

  @Get("/:id_usuarioEmpresa")
  async findById(@Req() request: Request): Promise<UsuarioEmpresa> {
    const { id_usuarioEmpresa } = request.params;
    return this.usuarioEmpresaService.findById(Number(id_usuarioEmpresa));
  }

  @Post("/")
  async create(@Req() request: Request): Promise<UsuarioEmpresa> {
    const createUsuarioEmpresaDto = request.body;
    return this.usuarioEmpresaService.create(createUsuarioEmpresaDto);
  }
}