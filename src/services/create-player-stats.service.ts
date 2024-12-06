import axios from "axios";
import { PlayerStat } from "../models";

export const createPlayerStats = async () => {
  try {
    const numberOfPlayers = Math.floor(Math.random() * 11);

    for (let i = 0; i < numberOfPlayers; i++) {
      const user = (await axios.get(process.env.RANDOM_USER_API_URL as string))
        .data.results[0];
      const {
        login: { uuid: playerId, username: nickname },
        picture: { large: profileImage },
      } = user;
      const score = Math.floor(Math.random() * 100) + 1;

      await PlayerStat.create({
        creationDate: new Date(),
        nickname,
        playerId,
        profileImage,
        score,
      });
    }
  } catch (error) {
    throw new Error("Error al generar las estadísticas");
  }
};
