
exports.up = function(knex) {
  return  knex.schema.createTable('ongs', function(table){
    table.string('id').primary;
    table.string('name').notnullable;
    table.string('email').notnullable;
    table.string('whatsapp').notnullable;
    table.string('city').notnullable;
    table.string('uf',2).notnullable;
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
