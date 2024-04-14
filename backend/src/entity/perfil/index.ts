import {Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from '../usuario';
import { Publicacao } from '../publicacao';

@Entity()
export class Perfil {
    @PrimaryGeneratedColumn()
    id_perfil: number;
    
    @Column()
    id_usuario: number;

    @OneToOne(() => Perfil)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario
}