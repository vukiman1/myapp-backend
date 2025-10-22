import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/base';
import { Conversations } from '../entities/conversations.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConversationService extends BaseService<Conversations> {
  name = 'Conversation';

  constructor(
    @InjectRepository(Conversations)
    public readonly conversationRepo: Repository<Conversations>,
  ) {
    super(conversationRepo);
  }
}
