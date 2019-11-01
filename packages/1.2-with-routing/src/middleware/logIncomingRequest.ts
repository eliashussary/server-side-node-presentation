import { MiddlewareHandler } from "../types";

const logIncomingRequest: MiddlewareHandler = (ctx, next) => {
  console.log("> Request at:", ctx.req.url);
  next();
};

export default logIncomingRequest;
