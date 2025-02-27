import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Page extends Model {
  public id!: number;
  public userId!: string;
  public title!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static async findById(id: string): Promise<Page | null> {
    return await Page.findOne({ where: { id } });
  }
}

Page.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pages",
    timestamps: true,
  }
);

export default Page;
