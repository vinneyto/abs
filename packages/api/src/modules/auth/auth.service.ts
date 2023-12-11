import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CredentialDto, TokenDto } from './dto';

const secret = process.env.SECRET_KEY as string;

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(cred: CredentialDto): Promise<TokenDto> {
    const user = await this.userService.findByUsername(cred.username);

    if (!user) {
      throw new UnauthorizedException('Incorrect username or password');
    }

    const passwordsMatch = await bcrypt.compare(cred.password, user.password);

    if (!passwordsMatch) {
      throw new UnauthorizedException('Incorrect username or password');
    }

    const token = jsonwebtoken.sign({ username: user.username }, secret, {
      expiresIn: '30 days',
    });

    return { token };
  }
}
