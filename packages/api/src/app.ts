import 'dotenv/config';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import mongoose from 'mongoose';
import { errorHandler } from './middleware';
import { createAdminIfNotExists } from './create-admin';
import * as routes from './routes';

export async function run() {
  const app = new Koa();
  const router = new Router();
  const secret = process.env.SECRET_KEY as string;

  mongoose.connect(process.env.DATABASE_URL as string);

  await createAdminIfNotExists();

  Object.values(routes).forEach(route => {
    router[route.method](route.path, ...route.middlewares, route.handler);
    console.log(`route: ${route.method} ${route.path}`);
  });

  app.use(errorHandler());
  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());
  const port = 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
