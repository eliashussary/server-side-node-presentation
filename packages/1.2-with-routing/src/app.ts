import http from "http";
import url from "url";
import { MiddlewareHandler, MiddlewareStack, IContext } from "./types";

export default class App {
  private stack: MiddlewareStack = [];
  private routes = new Map<string, MiddlewareStack>();

  use = (handler: MiddlewareHandler) => {
    this.stack.push(handler);
    return this;
  };

  compose = (middleware: MiddlewareStack) => {
    return (context: IContext) => {
      let idx = -1;
      const stack = middleware;
      next();

      function next() {
        idx += 1;
        const handler = stack[idx];
        handler(context, next);
      }
    };
  };

  get = (path: string, ...stack: MiddlewareStack) => {
    this.routes.set(path, stack);
    return this;
  };

  handle: http.RequestListener = (req, res) => {
    const context = {
      req,
      res
    };

    let handleRequest;
    const routeStack = this.routes.get(<string>req.url);
    if (routeStack) {
      handleRequest = this.compose([...this.stack, ...routeStack]);
      return handleRequest(context);
    }
    handleRequest = this.compose(this.stack);
    return handleRequest(context);
  };
}
