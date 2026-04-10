import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wish } from './wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wish])],
  providers: [WishService],
  controllers: [WishController],
  exports: [WishService],
})
export class WishModule {}
