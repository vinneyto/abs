import { Context } from 'koa';
import { Route } from '../Route';
import { jwtAuth } from '../middleware';

export const createTraining: Route = {
  path: '/training',
  method: 'post',
  middlewares: [jwtAuth()],
  handler: async (ctx: Context) => {
    console.log(ctx.state.user);

    ctx.status = 200;
  },
};
