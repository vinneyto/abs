import jsonwebtoken from 'jsonwebtoken';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtDto } from './dto';

const secret = process.env.SECRET_KEY as string;

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }

    const token = authHeader.split(' ')[1];

    const jwt = this.validateToken(token);
    request.jwt = jwt;

    return Boolean(jwt);
  }

  private validateToken(token: string): JwtDto | null {
    try {
      return checkToken(token);
    } catch (error) {
      return null;
    }
  }
}

function checkToken(token: string) {
  return jsonwebtoken.verify(token, secret) as JwtDto;
}
