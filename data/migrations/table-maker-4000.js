exports.up = function (knex, Promise) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project_name", 256).notNullable();
    tbl.string("project_description", 256);
    tbl.boolean("project_completed").defaultTo(false);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
