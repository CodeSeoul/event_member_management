import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMemberTable1609498281554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('app', true);
      await queryRunner.createTable(new Table({
        name: 'member',
          columns: [
              {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  generationStrategy: 'increment',
                  isGenerated: true
              },
              {
                  name: 'firstName',
                  type: 'varchar',
                  length: '80'
              },
              {
                  name: 'lastName',
                  type: 'varchar',
                  length: '80'
              },
              {
                  name: 'shortBio',
                  type: 'text'
              },
              {
                  name: 'imageUrl',
                  type: 'varchar',
                  length: '255',
                  isNullable: true
              },

              {
                  name: 'createdAt',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP'
              },
              {
                  name: 'updatedAt',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                  onUpdate: 'CURRENT_TIMESTAMP'
              }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return;
    }

}
