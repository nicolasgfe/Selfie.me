import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
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

    @OneToOne(() => Licenca, licenca => licenca.perfil)
    @JoinColumn({name: 'idPerfil'})
    perfil: Perfil;
}
