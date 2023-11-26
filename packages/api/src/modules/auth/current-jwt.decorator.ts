import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtDto } from './dto';

export const CurrentJwt = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.jwt as JwtDto;
  },
);
