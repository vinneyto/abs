import { AuthenticationError } from './AuthenticationError';

export class JwtAuthError extends AuthenticationError {
  constructor() {
    super('Auth token error');
  }
}
