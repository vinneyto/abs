import { ServerError } from './ServerError';

export class ValidationError extends ServerError {
  constructor(message: string) {
    super(400, message);
  }
}
