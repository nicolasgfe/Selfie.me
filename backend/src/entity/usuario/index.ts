import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Perfil } from '../perfil';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  email: string;

  @Column()
  status: Boolean;

  @Column()
  atualizadoEm: Date;

  @Column()
  criadoEm: Date;

  @OneToMany(() => Perfil, perfil => perfil.usuario)
  perfils: Perfil[];
}
