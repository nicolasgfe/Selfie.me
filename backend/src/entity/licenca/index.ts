import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Perfil } from '../perfil';

@Entity()
export class Licenca {
  @PrimaryGeneratedColumn()
  id_licenca: number;

  @Column()
  validade: Date;

  @Column()
  idPerfil: number;

  @Column()
  todosAdquiridos: boolean;

  @OneToMany(() => Perfil, perfil => perfil.licencas)
  @JoinColumn({ name: 'idPerfil' })
  perfil: Perfil;
}
