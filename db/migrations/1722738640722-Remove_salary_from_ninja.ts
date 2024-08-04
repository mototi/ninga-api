import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveSalaryFromNinja1722738640722 implements MigrationInterface {
    name = 'RemoveSalaryFromNinja1722738640722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" DROP COLUMN "salary"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninjas" ADD "salary" integer NOT NULL`);
    }

}
