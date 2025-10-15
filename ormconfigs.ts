// import { DataSource, DataSourceOptions } from 'typeorm';
// import 'dotenv/config';
// import { ConfigService } from '@nestjs/config';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async (configService: ConfigService) => {
//       const dbConfig = configService.get<DatabaseConfig>(
//         'app.db',
//       ) as DatabaseConfig;
//       const options: DataSourceOptions = {
//         type: 'postgres',
//         host: dbConfig.host,
//         port: dbConfig.port,
//         username: dbConfig.username,
//         password: dbConfig.password,
//         database: dbConfig.database,
//         migrationsTableName: 'migrations',
//         migrations: [],
//         synchronize: process.env.NODE_ENV !== 'production',
//       };
//       const dataSource = new DataSource(options);

//       return dataSource.initialize();
//     },
//   },
// ];
