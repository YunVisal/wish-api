import { DataSource } from 'typeorm';
import { AppDataSourceOption } from './database.config';

const dataSource = new DataSource(AppDataSourceOption);

export default dataSource;
