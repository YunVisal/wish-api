import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
}
