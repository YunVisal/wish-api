import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wish } from './wish.entity';
import { Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wish.dto';

@Injectable()
export class WishService {
  constructor(@InjectRepository(Wish) private repo: Repository<Wish>) {}

  async create(dto: CreateWishDto) {
    const wish = this.repo.create(dto);
    return this.repo.save(wish);
  }

  async findAll() {
    return this.repo.find();
  }

  async findById(id: number) {
    return this.repo.findOneBy({ id });
  }
}
