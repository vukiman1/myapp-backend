import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('me')
  findAll() {
    return this.authService.findAll();
  }

  @Post('login')
  create(@Body() loginDto: LoginDto) {
    return this.authService.create(loginDto);
  }
}
