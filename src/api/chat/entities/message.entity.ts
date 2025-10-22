import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Conversations } from './conversations.entity';
import { BaseEntity } from '@app/base';

@Entity('messages')
export class Message extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  content!: string;

  @ManyToOne(() => Conversations, (conversation) => conversation.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'reply_to_id' })
  replyToId!: Message;

  @JoinColumn({ name: 'conversation_id' })
  conversation!: Conversations;
}
