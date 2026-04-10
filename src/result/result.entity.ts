import { Wish } from '../wish/wish.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  consequenceText: string;

  @OneToOne(() => Wish)
  @JoinColumn()
  wish: Wish;
}
