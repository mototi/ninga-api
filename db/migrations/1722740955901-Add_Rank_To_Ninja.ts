import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRankToNinja1722740955901 implements MigrationInterface {
    name = 'AddRankToNinja1722740955901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" ADD "rank" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" DROP COLUMN "rank"`);
    }

}
