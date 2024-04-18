import {
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { Usuario } from '../usuario';
import { Publicacao } from '../publicacao';
import { Licenca } from "../licenca";

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @ManyToOne(() => Usuario, usuario => usuario.id_usuario)
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @OneToMany(() => Licenca, licenca => licenca.perfil)
  licencas: Licenca[]

  @OneToMany(() => Publicacao, publicacao => publicacao.perfil)
  publicacao: Publicacao[]
}
