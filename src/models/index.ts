import { Model } from "objection";
import Knex from "knex";
import { v4 as uuidv4 } from "uuid";

// Initialize knex
const knexConfig = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database",
  },
};

const knex = Knex(knexConfig);
Model.knex(knex);

// User Model
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }
}

// Template Model
class Template extends Model {
  static get tableName() {
    return "templates";
  }

  static get idColumn() {
    return "id";
  }
}

// Page Model
class Page extends Model {
  static get tableName() {
    return "pages";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    const Link = require("./link").default;
    return {
      links: {
        relation: Model.HasManyRelation,
        modelClass: Link,
        join: {
          from: "pages.id",
          to: "links.page_id",
        },
      },
    };
  }
}

// Category Model
class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get idColumn() {
    return "id";
  }
}

// Link Model
class Link extends Model {
  static get tableName() {
    return "links";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    const Category = require("./category").default;
    return {
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Category,
        join: {
          from: "links.id",
          through: {
            from: "link_categories.link_id",
            to: "link_categories.category_id",
          },
          to: "categories.id",
        },
      },
    };
  }
}

// Analytics Model
class Analytics extends Model {
  static get tableName() {
    return "analytics";
  }

  static get idColumn() {
    return "id";
  }
}

export { User, Template, Page, Category, Link, Analytics };
