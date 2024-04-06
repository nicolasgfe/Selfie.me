import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Perfil } from '../perfil';

@Entity()
export class Publicacao {
  @PrimaryGeneratedColumn()
  id_publicacao: number;

  @ManyToOne(() => Perfil, perfil => perfil.publicacoes)
  @JoinColumn({ name: "idPerfil" })
  perfil: Perfil;

  @Column()
  descricao: string;
}
