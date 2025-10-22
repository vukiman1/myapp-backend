import { Injectable } from '@nestjs/common';
import { Conversations } from '../entities/conversations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@app/base';

@Injectable()
export class ChatService extends BaseService<Conversations> {
  name = 'Chat';

  constructor(
    @InjectRepository(Conversations)
    public readonly conversationsRepo: Repository<Conversations>,
  ) {
    super(conversationsRepo);
  }
}
