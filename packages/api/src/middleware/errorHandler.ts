import { Context, Next } from 'koa';
import { ServerError } from '../errors/ServerError';

export const errorHandler = () => async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof ServerError) {
      ctx.status = err.status;
      ctx.body = err.message;
    } else {
      ctx.status = 500;
      ctx.body = 'internal server error';
    }

    console.error(err);
  }
};
