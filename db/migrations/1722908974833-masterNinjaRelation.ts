import { MigrationInterface, QueryRunner } from "typeorm";

export class MasterNinjaRelation1722908974833 implements MigrationInterface {
    name = 'MasterNinjaRelation1722908974833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" ADD "masterId" integer`);
        await queryRunner.query(`ALTER TABLE "ninjas" ADD CONSTRAINT "FK_71685607ddd4d3c12b3aec0c0b7" FOREIGN KEY ("masterId") REFERENCES "masters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" DROP CONSTRAINT "FK_71685607ddd4d3c12b3aec0c0b7"`);
        await queryRunner.query(`ALTER TABLE "ninjas" DROP COLUMN "masterId"`);
    }

}
