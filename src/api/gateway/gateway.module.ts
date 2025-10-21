import { Module } from '@nestjs/common';
import { ChatModule } from '../chat/chat.module';
import { ChatGateway } from '../chat/chat.gateway';
@Module({
  imports: [ChatModule],
  providers: [ChatGateway],
})
export class GatewayModule {}
