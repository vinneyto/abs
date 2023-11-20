import { ObjectSchema } from 'joi';
import { Context, Next } from 'koa';
import { ValidationError } from '../errors';

export function validateBody(schema: ObjectSchema) {
  return async (ctx: Context, next: Next) => {
    const { error } = schema.validate(ctx.request.body);
    if (error) {
      throw new ValidationError(
        error.details.map(detail => detail.message).join(', '),
      );
    }
    await next();
  };
}
