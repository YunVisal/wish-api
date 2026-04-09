import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { Repository } from 'typeorm';
import { WishService } from 'src/wish/wish.service';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result) private repo: Repository<Result>,
    private wishService: WishService,
  ) {}

  async generate(wishId: number) {
    const wish = await this.wishService.findById(wishId);
    if (!wish) {
      throw new BadRequestException('Wish not found');
    }

    const dto = {
      consequenceText: 'Hello',
    };
    const result = this.repo.create(dto);
    result.wish = wish;
    return this.repo.save(result);
  }
}
