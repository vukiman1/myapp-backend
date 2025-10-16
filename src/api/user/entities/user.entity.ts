import { BaseEntity } from '@app/base';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @ApiProperty({
    description: 'Email',
    example: 'test@example.com',
    required: true,
  })
  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 255,
    name: 'email',
  })
  email!: string;

  @ApiProperty({
    description: 'Password',
    example: 'password',
    required: true,
  })
  @Column({ nullable: false, type: 'varchar', length: 255, name: 'password' })
  password!: string;
}
