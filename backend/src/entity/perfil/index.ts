import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario';
import { Publicacao } from '../publicacao';

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @ManyToOne(() => Usuario, usuario => usuario.perfils)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario;

  @OneToMany(() => Publicacao, publicacao => publicacao.perfil)
  publicacoes: Publicacao[];
}
