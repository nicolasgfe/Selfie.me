import {  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario';

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @ManyToOne(() => Usuario, usuario => usuario.perfils)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario;
}
