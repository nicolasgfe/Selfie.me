import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuarioEmpresa {
    @PrimaryGeneratedColumn()
    id_usuarioEmpresa: number;

    @Column()
    id_usuario: number;

    @Column()
    id_empresa: number;

    
}