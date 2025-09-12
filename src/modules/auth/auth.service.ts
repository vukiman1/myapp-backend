import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  findAll() {
    return {
      message: 'Auth me',
    };
  }
  create(loginDto: LoginDto) {
    return {
      message: loginDto,
    };
  }
}
