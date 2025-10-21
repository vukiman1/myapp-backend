import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

interface RoomData {
  conversationId: string;
}

interface MessageData {
  conversationId: string;
  content: string;
  userId?: string;
}

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/chat',
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('room:join')
  async onJoinRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: RoomData,
  ) {
    await client.join(`room:${data.conversationId}`);
    console.log('Joined room', data);
    return { success: true, message: `Joined room ${data.conversationId}` };
  }

  @SubscribeMessage('room:leave')
  async onLeaveRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: RoomData,
  ) {
    await client.leave(`room:${data.conversationId}`);
    return { success: true, message: `Left room ${data.conversationId}` };
  }

  @SubscribeMessage('typing')
  onTyping(@ConnectedSocket() client: Socket, @MessageBody() data: RoomData) {
    setTimeout(() => {
      client.to(`room:${data.conversationId}`).emit('typing', false);
    }, 1000);
    return { success: true };
  }

  @SubscribeMessage('message:send')
  async onSend(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: MessageData,
  ) {
    console.log('Message sent', data);
    // const msg = await this.chatService.saveMessage(data);
    client.to(`room:${data.conversationId}`).emit('message:new', data);
    return { success: true };
  }
}
