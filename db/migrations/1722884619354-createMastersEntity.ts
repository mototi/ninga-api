import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMastersEntity1722884619354 implements MigrationInterface {
    name = 'CreateMastersEntity1722884619354'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "masters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "style" character varying NOT NULL, "rank" character varying NOT NULL, "weapon" character varying NOT NULL, CONSTRAINT "PK_ffb63641dda57195f6e23dc4c0d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "masters"`);
    }

}
