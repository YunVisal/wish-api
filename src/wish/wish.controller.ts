import { Body, Controller, Get, Post } from '@nestjs/common';
import { WishService } from './wish.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { WishDto } from './dto/wish.dto';

@Controller('wish')
@Serialize(WishDto)
export class WishController {
  constructor(private service: WishService) {}

  @Post()
  create(@Body() dto: CreateWishDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
