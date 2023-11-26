import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() cred: CredentialDto) {
    return this.authService.login(cred);
  }
}
