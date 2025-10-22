import { Injectable } from '@nestjs/common';
import { BaseService } from '@app/base';
import { Message } from '../entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService extends BaseService<Message> {
  name = 'Message';

  constructor(
    @InjectRepository(Message)
    public readonly messageRepo: Repository<Message>,
  ) {
    super(messageRepo);
  }
}
