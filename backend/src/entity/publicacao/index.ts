import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Perfil } from '../perfil';
import { Midia } from '../midia';

@Entity()
export class Publicacao {
  @PrimaryGeneratedColumn()
  id_publicacao: number;

  @ManyToOne(() => Perfil, perfil => perfil.publicacoes)
  @JoinColumn({ name: "idPerfil" })
  perfil: Perfil;

  @Column()
  descricao: string;

  @OneToMany(() => Midia, midia => midia.publicacao)
  midias: Midia[];
}
