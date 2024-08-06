import { MigrationInterface, QueryRunner } from "typeorm";

export class MasterNinjaRelation1722966130179 implements MigrationInterface {
    name = 'MasterNinjaRelation1722966130179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" DROP CONSTRAINT "FK_71685607ddd4d3c12b3aec0c0b7"`);
        await queryRunner.query(`ALTER TABLE "ninjas" RENAME COLUMN "masterId" TO "master_id"`);
        await queryRunner.query(`ALTER TABLE "ninjas" ALTER COLUMN "master_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninjas" ADD CONSTRAINT "FK_0f80c774abb537cd30e323db51c" FOREIGN KEY ("master_id") REFERENCES "masters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" DROP CONSTRAINT "FK_0f80c774abb537cd30e323db51c"`);
        await queryRunner.query(`ALTER TABLE "ninjas" ALTER COLUMN "master_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninjas" RENAME COLUMN "master_id" TO "masterId"`);
        await queryRunner.query(`ALTER TABLE "ninjas" ADD CONSTRAINT "FK_71685607ddd4d3c12b3aec0c0b7" FOREIGN KEY ("masterId") REFERENCES "masters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
