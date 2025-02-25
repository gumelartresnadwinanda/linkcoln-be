import { Model } from "objection";

class Link extends Model {
  static get tableName() {
    return "links";
  }

  static get idColumn() {
    return "id";
  }
}

export default Link;
