import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Perfil } from "../perfil";
import { Empresa } from "../empresa";

@Entity()
export class UsuarioEmpresa {
    @PrimaryGeneratedColumn()
    id_usuarioEmpresa: number;

    @Column()
    id_usuario: number;

    @Column()
    id_empresa: number;

    @OneToOne(() => Perfil)
    @JoinColumn({ name: 'id_perfil' })
    perfil: Perfil;

    @OneToOne(() => Empresa)
    @JoinColumn({ name: 'id_empresa' })
    empresa: Empresa;
}