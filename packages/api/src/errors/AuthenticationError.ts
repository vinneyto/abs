import { ServerError } from './ServerError';

export class AuthenticationError extends ServerError {
  constructor(message: string) {
    super(401, message);
  }
}
