import http from "http";
import App from "./app";
import { logIncomingRequest, setJsonContentType } from "./middleware";

const app = new App();

const HOSTNAME = "localhost";
const PORT = parseInt(<string>process.env.PORT, 0) || 3000;

app.use(logIncomingRequest).use(setJsonContentType);

app
  .get("/", ctx => {
    ctx.res.statusCode = 200;
    ctx.res.end(
      JSON.stringify({
        message: "Go Away!"
      })
    );
  })
  .get("/hello", ctx => {
    ctx.res.statusCode = 200;
    ctx.res.end(
      JSON.stringify({
        message: "Hello World"
      })
    );
  });

const server = http.createServer(app.handle);

server.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on port %s:%s", HOSTNAME, PORT);
});
