import { Expose } from 'class-transformer';

export class GenerateResultDto {
  @Expose()
  consequenceText: string;
}
