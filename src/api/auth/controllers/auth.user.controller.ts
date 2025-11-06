import { StrategyKey } from '@app/constants';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { AuthBaseController } from './auth.base.controller';
import { UserEntity } from 'src/api/user/entities/user.entity';

@ApiTags('Auth API For User')
@Controller('/auth')
export class AuthUserController extends AuthBaseController<UserEntity>(
  'user',
  StrategyKey.LOCAL.USER,
) {
  constructor(public readonly authService: AuthService) {
    super(authService);
  }
}
