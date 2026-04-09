import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

const isTsNode = !!process[Symbol.for('ts-node.register.instance')];
const fileExt = isTsNode ? 'ts' : 'js';

const configService = new ConfigService();

export const AppDataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow<string>('DB_HOST'),
  username: configService.getOrThrow<string>('DB_USERNAME'),
  password: configService.getOrThrow<string>('DB_PASSWORD'),
  database: configService.getOrThrow<string>('DB_NAME'),
  entities: [__dirname + `/../**/*.entity.${fileExt}`],
  migrations: [__dirname + `/../../migrations/*.${fileExt}`],
  synchronize: false,
  ssl: true,
};
