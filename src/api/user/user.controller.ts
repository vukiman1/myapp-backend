import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { BaseController } from '@app/base';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController extends BaseController<User>(User, 'User') {
  relations: string[] = [];
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
