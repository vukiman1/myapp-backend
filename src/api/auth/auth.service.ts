import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  findAll() {
    return {
      message: 'Auth me',
    };
  }
  async login(loginDto: LoginDto) {
    // Ví dụ verify password
    const hashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$...'; // từ database
    const plainPassword = loginDto.password; // từ user input

    const isPasswordValid = await argon2.verify(hashedPassword, plainPassword);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    return {
      message: 'Login successful',
    };
  }
}
