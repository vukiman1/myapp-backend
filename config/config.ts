import dotenv from 'dotenv';

dotenv.config({
  path: ['.env', '.env.local', '.env.production'],
});

export const config = {
  app: {
    nodeEnv: process.env.NODE_ENV || 'local',
    port: Number(process.env.PORT) || 8000,
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5444',
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_DATABASE || 'myapp',
  },
};
