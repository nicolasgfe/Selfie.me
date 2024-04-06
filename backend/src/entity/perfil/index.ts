import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from '../usuario';

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