import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { WishModule } from 'src/wish/wish.module';
import { ConsequenceTextGenerationService } from './services/consequence-text-generation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Result]), WishModule],
  providers: [ResultService, ConsequenceTextGenerationService],
  controllers: [ResultController],
})
export class ResultModule {}
