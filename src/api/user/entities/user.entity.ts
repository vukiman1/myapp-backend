import { BaseEntity } from '@app/base';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as argon2 from 'argon2';
@Entity('users')
export class User extends BaseEntity {
  @Column({
    unique: true,
    nullable: false,
    type: 'varchar',
    length: 255,
    name: 'email',
  })
  email!: string;

  @Column({ nullable: false, type: 'varchar', length: 255, name: 'password' })
  @Exclude()
  password!: string;

  @BeforeInsert()
  async beforeInsert() {
    this.password = await argon2.hash(this.password);
  }
}
