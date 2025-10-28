import { Controller, Get } from '@nestjs/common';
import { ConversationService } from './servies/conversation.service';
//comment
@Controller('chat')
export class ChatController {
  constructor(private readonly conversationService: ConversationService) {}
  //coment2
  @Get('conversations')
  getAllConversations() {
    return this.conversationService.getAll();
  }
}
