import { Middleware, Context } from 'koa';

export interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  middlewares: Middleware[];
  handler: (ctx: Context) => Promise<void>;
}
