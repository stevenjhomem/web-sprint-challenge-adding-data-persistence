exports.up = function (knex, Promise) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 256).notNullable();
      tbl.string("project_description", 256);
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 256).notNullable().unique();
      tbl.string("resource_description", 256);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description", 256).notNullable();
      tbl.string("task_notes", 256);
      tbl.boolean("task_completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resource_id");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
