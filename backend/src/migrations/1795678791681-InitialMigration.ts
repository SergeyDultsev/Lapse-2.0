import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1795678791681 implements MigrationInterface {
    name = 'InitialMigration1795678791681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_entity"
            ADD "avatarUrl" character varying NOT NULL DEFAULT ''
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_entity" DROP COLUMN "avatarUrl"
        `);
    }

}
