import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishModule } from './wish/wish.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSourceOption } from './database/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRoot(AppDataSourceOption),
    WishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
