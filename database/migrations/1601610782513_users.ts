import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('email').notNullable().unique()
      table.string('phone').notNullable()
      table.string('address')
      table.integer('role_id')
      table.foreign('role_id').references('roles.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
