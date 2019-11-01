import Koa from "koa";
import Router from "@koa/router";

const PORT = parseInt(<string>process.env.PORT, 0) || 3000;
const HOSTNAME = "localhost";

const app = new Koa();
const router = new Router();

router.get("/hello/:name", async (ctx, next) => {
  const { name } = ctx.params;
  ctx.body = {
    message: `Hello ${name}`
  };
  return next();
});

app.use(router.routes());

app.listen(PORT, HOSTNAME, () => {
  console.log("> Listening on %s:%s", HOSTNAME, PORT);
});
