import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('me')
  findAll() {
    return this.authService.findAll();
  }

  // @Post('login')
  // create(@Body() loginDto: LoginDto) {
  //   return this.authService.create(loginDto);
  // }
}
