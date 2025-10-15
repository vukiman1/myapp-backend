import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

interface DatabaseConfig {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const dbConfig = configService.get('db') as DatabaseConfig;
        const options: DataSourceOptions = {
          type: dbConfig.type,
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: process.env.DB_NAME || dbConfig.database,
          migrationsTableName: 'migrations',
          migrations: [],
          synchronize: process.env.NODE_ENV !== 'production',
        };
        return {
          ...options,
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
