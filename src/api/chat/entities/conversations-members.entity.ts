import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Conversations } from './conversations.entity';
import { User } from 'src/api/user/entities/user.entity';

@Entity('conversations_members')
export class ConversationsMembers extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  userId!: User;

  @ManyToOne(() => Conversations, (conversation) => conversation.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conversation_id' })
  conversation!: Conversations;
}
