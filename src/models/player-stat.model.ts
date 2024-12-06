import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

class PlayerStat extends Model {
  public id!: number;
  public playerId!: string;
  public nickname!: string;
  public profileImage!: string;
  public creationDate!: Date;
  public score!: number;
}

PlayerStat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 100,
      },
    },
  },
  {
    sequelize,
    modelName: "PlayerStat",
    tableName: "player_stat",
  }
);

export default PlayerStat;
