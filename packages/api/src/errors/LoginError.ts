import { AuthenticationError } from './AuthenticationError';

export class LoginError extends AuthenticationError {
  constructor() {
    super('Invalid username of password');
  }
}
