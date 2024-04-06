import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Plano {
  @PrimaryGeneratedColumn()
  id_plano: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  validade: Date;
}
