import { Expose } from 'class-transformer';

export class WishDto {
  @Expose()
  id: number;

  @Expose()
  content: string;
}
