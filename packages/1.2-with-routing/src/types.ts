import http from "http";

export interface IContext {
  req: http.IncomingMessage;
  res: http.ServerResponse;
}

export type MiddlewareHandler = (ctx: IContext, next: () => void) => void;
export type MiddlewareStack = MiddlewareHandler[];
