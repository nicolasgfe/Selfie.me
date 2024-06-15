import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaUsuario1715986183875 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuario",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
          }, {
            name: "id",
            type: "integer",
            isPrimary: true,
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuario")
  }

}
