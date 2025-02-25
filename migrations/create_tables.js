exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.uuid("id").primary();
      table.uuid("auth_user_id").notNullable();
      table.string("name").notNullable();
      table.string("profile_picture").nullable();
      table.enu("user_type", ["Admin", "Paid", "Free"]).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
    })
    .createTable("templates", function (table) {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.jsonb("content").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
    })
    .createTable("pages", function (table) {
      table.uuid("id").primary();
      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.string("title").notNullable();
      table.string("description").nullable();
      table
        .uuid("template_id")
        .references("id")
        .inTable("templates")
        .onDelete("SET NULL");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
    })
    .createTable("categories", function (table) {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
    })
    .createTable("links", function (table) {
      table.uuid("id").primary();
      table
        .uuid("page_id")
        .references("id")
        .inTable("pages")
        .onDelete("CASCADE");
      table.string("url").notNullable();
      table.string("name").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
    })
    .createTable("link_categories", function (table) {
      table
        .uuid("link_id")
        .references("id")
        .inTable("links")
        .onDelete("CASCADE");
      table
        .uuid("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.primary(["link_id", "category_id"]);
    })
    .createTable("analytics", function (table) {
      table.uuid("id").primary();
      table
        .uuid("page_id")
        .references("id")
        .inTable("pages")
        .onDelete("CASCADE");
      table
        .uuid("link_id")
        .references("id")
        .inTable("links")
        .onDelete("CASCADE");
      table.enu("event_type", ["link_click", "page_visit"]).notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("analytics")
    .dropTable("link_categories")
    .dropTable("links")
    .dropTable("categories")
    .dropTable("pages")
    .dropTable("templates")
    .dropTable("users");
};
