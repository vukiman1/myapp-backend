import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/base';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends BaseService<User> {
  name = 'User';
  constructor(
    @InjectRepository(User)
    public readonly userRepo: Repository<User>,
  ) {
    super(userRepo);
  }

  async testGetAllUsers() {
    return this.getAll();
  }
}
