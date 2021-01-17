import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEventTable1609189523270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('app', true);
    await queryRunner.createTable(
      new Table({
        name: 'event',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'title',
            type: 'varchar',
            length: '80',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'startTimestamp',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'durationMinutes',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'imageUrl',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'seriesId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'venueId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'onlineLink',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}
