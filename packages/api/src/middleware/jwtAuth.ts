import jsonwebtoken from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { JwtAuthError } from '../errors';

const secret = process.env.SECRET_KEY as string;

export const jwtAuth = () => async (ctx: Context, next: Next) => {
  try {
    const token = ctx.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new JwtAuthError();
    }

    const decoded = jsonwebtoken.verify(token, secret);
    ctx.state.user = decoded;
    await next();
  } catch (err) {
    throw new JwtAuthError();
  }
};
