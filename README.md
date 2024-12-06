# Proyecto Estadisticas de Jugadores

Este proyecto es una API para generar y obtener estadísticas de juegos entre jugadores. La API expone dos endpoints principales: uno para generar estadísticas aleatorias de jugadores y otro para obtener las mejores puntuaciones de los jugadores.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Demo en Producción](#demo-en-producción)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Variables de Entorno](#variables-de-entorno)
- [Infraestructura](#infraestructura)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/NurCord/psh-game.git
   cd psh-game
   ```
1. Instala las dependencias:
   ```sh
    npm install
   ```

## Demo en Producción

Puedes acceder a la API desplegada en Render a través del siguiente enlace: [https://psh-game.onrender.com/](https://psh-game.onrender.com/)

## Uso

1. Compila el proyecto:

   ```sh
   npm run build
   ```

2. Inicia el servidor:

   ```sh
   npm start
   ```

3. La API estará disponible en http://localhost:3000.

## Endpoints

### POST /api/create-stats

Genera estadísticas aleatorias de jugadores.

- URL: /api/create-stats
- Método: POST
- Respuestas:
  - `200 OK`: Si las estadísticas se generaron correctamente.
  - `500 Internal Server Error`: Si hubo un error al generar las estadísticas.

### GET /api/stats

Obtiene las 10 mejores puntuaciones de los jugadores.

- URL: /api/stats
- Método: GET
- Respuestas:
  - `200 OK`: Devuelve las mejores puntuaciones en formato JSON.
  - `500 Internal Server Error`: Si hubo un error al obtener las estadísticas.

## Estructura del Proyecto

```sh
psh-game/
├── .env
├── .gitignore
├── package.json
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── src/
│   ├── app.ts
│   ├── controllers/
│   │   ├── create-stats.controller.ts
│   │   ├── index.ts
│   │   └── stats.controller.ts
│   ├── db.ts
│   ├── models/
│   │   ├── index.ts
│   │   └── player-stat.model.ts
│   ├── routes/
│   │   └── player-stats.route.ts
│   ├── services/
│   │   ├── create-player-stats.service.ts
│   │   └── index.ts
│   ├── types/
│   ├── utils/
│   └── test/
├── tsconfig.json
```

## Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en tu archivo `.env`:

```sh
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
RANDOM_USER_API_URL=https://randomuser.me/api
```

## Infraestructura

- **Cron Job**: Esta API tiene un cron job configurado en una regla de Amazon EventBridge que ejecuta la generación de estadísticas de jugadores cada 5 minutos.
- **Base de Datos**: La base de datos utilizada es MySQL y está alojada en Amazon RDS.

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/en/) (v18.20.4)
- [Express](https://expressjs.com/) (v4.21.1)
- [TypeScript](https://www.typescriptlang.org/) (v5.7.2)
- [Axios](https://axios-http.com/docs/intro) (v1.7.9)
