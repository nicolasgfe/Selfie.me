import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Publicacao } from '../publicacao';

@Entity()
export class Midia {
  @PrimaryGeneratedColumn()
  id_midia: number;

  @Column()
  nome: string;

  @Column()
  base: string;

  @Column()
  descricao: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Publicacao, publicacao => publicacao.midias)
  @JoinColumn({ name: "idPublicacao" })
  publicacao: Publicacao;

  @Column()
  valor: number;

  @Column()
  atualizadoEm: Date;

  @Column()
  criadoEm: Date;
}
