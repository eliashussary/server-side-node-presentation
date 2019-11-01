import { MiddlewareHandler } from "../types";

const setJsonContentType: MiddlewareHandler = (ctx, next) => {
  ctx.res.setHeader("Content-Type", "application/json");
  next();
};
export default setJsonContentType;
