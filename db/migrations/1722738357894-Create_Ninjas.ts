import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNinjas1722738357894 implements MigrationInterface {
    name = 'CreateNinjas1722738357894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ninjas" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "style" character varying NOT NULL, "salary" integer NOT NULL, CONSTRAINT "PK_a8eca4e9d8779cfa88b43d1a745" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ninjas"`);
    }

}
