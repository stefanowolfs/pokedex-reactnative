import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../../@types/user';

@Entity('user')
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  username!: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password!: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  active!: boolean;
}
