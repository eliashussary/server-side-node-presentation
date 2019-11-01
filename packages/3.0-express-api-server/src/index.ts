import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createConnection } from "typeorm";
import { Todo, registerDatabaseAppContext } from "./models";
import Routes from "./routes";
const PORT = parseInt(<string>process.env.PORT, 0) || 3000;
const HOSTNAME = "localhost";

createConnection({
  type: "sqlite",
  database: "./data/todo.db",
  entities: [Todo],
  synchronize: true,
  logging: true
}).then(database => {
  const app = express();

  app.use(cors());

  app
    .use((req, res, next) => {
      registerDatabaseAppContext(req, database);
      next();
    })
    .use(bodyParser.json());

  // register all routes
  for (const route of Routes) {
    app.use(route.path, route.router);
  }

  app.listen(PORT, HOSTNAME, () => {
    console.log("> Listening on port %s", PORT);
  });
});
