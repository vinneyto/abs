import 'dotenv/config';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from './models';
import { errorHandler } from './middleware';
import { LoginError, ValidationError } from './errors';
import { createAdminIfNotExists } from './create-admin';

export async function run() {
  const app = new Koa();
  const router = new Router();
  const secret = process.env.SECRET_KEY as string;

  mongoose.connect(process.env.DATABASE_URL as string);

  await createAdminIfNotExists();

  router.post('/login', async ctx => {
    const { username, password } = ctx.request.body;

    if (typeof username !== 'string' || typeof password !== 'string') {
      throw new ValidationError(
        'username and password should be presented and should be a string',
      );
    }

    const user = await User.findOne({ username });

    if (!user) {
      throw new LoginError();
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      throw new LoginError();
    }

    const token = jsonwebtoken.sign({ user: user.username }, secret, {
      expiresIn: '30 days',
    });

    ctx.body = { token };
  });

  app.use(errorHandler());
  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());
  const port = 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
