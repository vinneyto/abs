import { Context } from 'koa';
import { Route } from '../Route';
import { LoginError, ValidationError } from '../errors';
import { User } from '../models';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { validateBody } from '../middleware';
import Joi from 'joi';

const secret = process.env.SECRET_KEY as string;

export const login: Route = {
  path: '/login',
  method: 'post',
  middlewares: [
    validateBody(
      Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }).required(),
    ),
  ],
  handler: async (ctx: Context) => {
    const { username, password } = ctx.request.body;

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
  },
};
