import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Midia } from '../midia';
import { Publicacao } from '../publicacao';

@Entity()
export class Comentario {
    @PrimaryGeneratedColumn()
    id_comentario: number;

    @Column()
    conteudo: string;

    @Column()
    idMidia: Boolean;

    @Column()
    idPublicacao: number;

    @Column()
    idSubComentario: number;

    @Column()
    criadoEm: Date;

    @Column()
    atualizadoEm: Date;

    @ManyToOne(() => Comentario, comentario => comentario.midia)
    @JoinColumn({name: 'idMidia'})
    midia: Midia;

    @OneToOne(() => Comentario, comentario => comentario.publicacao)
    @JoinColumn({name: 'idPublicacao'})
    publicacao: Publicacao;

    @ManyToOne(() => Comentario, comentario => comentario.subComentario)
    @JoinColumn({name: 'idSubComentario'})
    subComentario: Comentario;
}
