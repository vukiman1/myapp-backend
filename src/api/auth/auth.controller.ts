import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from '@app/decorators/user.decorator';
import { BaseEntity } from 'typeorm';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController<Entity extends BaseEntity> {
  constructor(private readonly authService: AuthService) {}
  @Get('me')
  findAll() {
    return this.authService.findAll();
  }

  @Post('login')
  @HttpCode(200)
  // @ApiLogin(userType)
  // @UseGuards(AuthGuard(strategyKey))
  async login(
    @Body() _login: LoginDto, // Load to Swagger
    @User() userData: Entity,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log(userData, response);
    return {
      message: 'Login successful',
    };
    // return this.authService.login(userData);
  }

  @Post('register')
  async register(@Body() register: RegisterDto) {
    console.log(register);
    return {
      message: 'Register successful',
      data: register,
    };
  }
}
