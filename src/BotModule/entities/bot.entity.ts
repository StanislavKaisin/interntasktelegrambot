import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bot_token: string;

  @Column({ unique: true })
  bot_name: string;
}
