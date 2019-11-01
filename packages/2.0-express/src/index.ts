import express from "express";
import bodyParser from "body-parser";

const PORT = parseInt(<string>process.env.PORT, 0) || 3000;
const HOSTNAME = "localhost";

const app = express();

app
  .use(bodyParser.json())
  .get("/", (req, res, next) => {
    res.status(200).json({
      message: "Go Away!"
    });
  })
  .get("/hello/:name", (req, res, next) => {
    const { name } = req.params;

    res.status(200).json({
      message: `Hello ${name}`
    });
  });

app.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on port %s", PORT);
});
