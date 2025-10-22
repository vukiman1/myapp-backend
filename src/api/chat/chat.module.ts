import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { Message } from './entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversations } from './entities/conversations.entity';
import { ConversationsMembers } from './entities/conversations-members.entity';
import { MessageService } from './servies/message.service';
import { ConversationService } from './servies/conversation.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversations, ConversationsMembers, Message]),
  ],
  controllers: [ChatController],
  providers: [ChatGateway, MessageService, ConversationService],
})
export class ChatModule {}
