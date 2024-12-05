import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
  process.env.DB_NAME || "psh-game-challenge-database",
  process.env.DB_USER || "admin",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3306,
    logging: false,
  }
);

export default sequelize;
