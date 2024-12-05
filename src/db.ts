import { Sequelize } from "sequelize-typescript";

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);

const sequelize = new Sequelize(
  process.env.DB_NAME || "psh-game-database",
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
