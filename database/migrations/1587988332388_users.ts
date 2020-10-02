import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('email', 255).notNullable().alter()
      table.string('password', 180).notNullable().alter()
      table.string('remember_me_token').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
