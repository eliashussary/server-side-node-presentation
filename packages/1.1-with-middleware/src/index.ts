import http from "http";
import App from "./app";
import { MiddlewareHandler } from "./types";


const HOSTNAME = "localhost";
const PORT = parseInt(<string>process.env.PORT, 0) || 3000;

const app = new App();

const logIncomingRequest: MiddlewareHandler = (ctx, next) => {
  console.log("> Request at:", ctx.req.url);
  next();
};

const setJsonContentType: MiddlewareHandler = (ctx, next) => {
  ctx.res.setHeader("Content-Type", "application/json");
  next();
};

const sayHello: MiddlewareHandler = ctx => {
  ctx.res.statusCode = 200;
  ctx.res.end(
    JSON.stringify({
      message: "Hello World"
    })
  );
};

app
  .use(logIncomingRequest)
  .use(setJsonContentType)
  .use(sayHello);

const server = http.createServer(app.handle);

server.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on port %s:%s", HOSTNAME, PORT);
});
