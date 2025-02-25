import { Model } from "objection";

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get idColumn() {
    return "id";
  }
}

export default Category;
