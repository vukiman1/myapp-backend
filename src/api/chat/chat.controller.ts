import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SubscribeMessage } from '@nestjs/websockets';
import { MessageBody } from '@nestjs/websockets';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    console.log('handleEvent', data);
    return data;
  }
}
