import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthUserController } from './controllers/auth.user.controller';

@Module({
  controllers: [AuthUserController],
  providers: [AuthService],
})
export class AuthModule {}
