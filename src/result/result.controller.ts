import { Controller, Query, Get } from '@nestjs/common';
import { ResultService } from './result.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { GenerateResultDto } from './dto/generate-result.dto';

@Controller('result')
export class ResultController {
  constructor(private resultService: ResultService) {}

  @Get('generate')
  @Serialize(GenerateResultDto)
  generate(@Query('wish-id') wishId: number) {
    return this.resultService.generate(wishId);
  }
}
