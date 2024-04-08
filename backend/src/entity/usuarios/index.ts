import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

    @Column({default: true})
    status: boolean;

    @Column()
    criadoEm: string;

    @Column()
    atualizadoEm: string;

    @Column()
    senha: string;

}