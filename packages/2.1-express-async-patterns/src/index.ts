import express from "express";
import bodyParser from "body-parser";
import handleGetWeatherWithCallbacks from "./routes/1-weatherCallbacks";
import handleGetWeatherWithPromises from "./routes/2-weatherPromises";
import handleGetWeatherWithAsyncAwait from "./routes/3-weatherAsyncAwait";

const PORT = parseInt(<string>process.env.PORT, 0) || 3000;
const HOSTNAME = "localhost";
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("> Request at:", req.url);
  next();
});

app
  .get("/weather/callbacks", handleGetWeatherWithCallbacks)
  .get("/weather/promises", handleGetWeatherWithPromises)
  .get("/weather/await", handleGetWeatherWithAsyncAwait);

app.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on port %s", PORT);
});
