import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class BotEntity {
  @PrimaryColumn()
  bot_token: string;

  @Column({ unique: true })
  bot_name: string;
}
