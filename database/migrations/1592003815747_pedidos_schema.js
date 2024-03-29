'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PedidosSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('ingredientes').notNullable()
      table.integer('status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosSchema
