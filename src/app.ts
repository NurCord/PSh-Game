import express from "express";
import router from "./routes/player-stats.route";
import sequelize from "./db";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
    await sequelize.sync();
    console.log("Modelos sincronizados con la base de datos.");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};

initDb();
