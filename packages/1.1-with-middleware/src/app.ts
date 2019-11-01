import http from "http";
import { MiddlewareHandler } from "./types";

export default class App {
  private stack: MiddlewareHandler[] = [];

  use = (handler: MiddlewareHandler) => {
    this.stack.push(handler);
    return this;
  };

  handle: http.RequestListener = (req, res) => {
    const context = {
      req,
      res
    };

    let idx = -1;
    const stack = this.stack;
    next();

    function next() {
      idx += 1;
      const handler = stack[idx];
      handler(context, next);
    }
  };
}
