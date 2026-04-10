import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishModule } from './wish/wish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSourceOption } from './database/database.config';
import { ConfigModule } from '@nestjs/config';
import { ResultModule } from './result/result.module';
import { HealthCheckModule } from './health_check/health_check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(AppDataSourceOption),
    WishModule,
    ResultModule,
    HealthCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
