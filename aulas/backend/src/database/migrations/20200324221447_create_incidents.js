
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notnullable;
    table.string('description').notnullable;
    table.decimal('value').notnullable;
    table.string('ong_id').notnullable;
    table.foreign('ong_id').references('id').inTable('ongs');  
  });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
