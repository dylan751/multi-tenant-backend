import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPermissionObjectToPermission1695117773300
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'permissons',
      new TableColumn({
        name: 'permissionObjectId',
        type: 'int',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('permissons', 'permissionObjectId');
  }
}
