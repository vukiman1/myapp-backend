import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './config/config';
import { User } from 'src/api/user/entities/user.entity';
import { Products } from 'src/api/products/entities/products.entities';

//ok
interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const dbConfig: DatabaseConfig = {
  host: config.db.host,
  port: parseInt(config.db.port),
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
};

export const options: DataSourceOptions = {
  type: 'postgres',
  ...dbConfig,
  entities: [User, Products],
  migrationsTableName: 'migrations',
  migrations: ['migrations/*.ts'],
  synchronize: config.app.nodeEnv !== 'production',
};
export const AppDataSource = new DataSource(options);
