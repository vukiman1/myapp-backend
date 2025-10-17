import { AppDataSource } from '../ormconfigs';
import { seedUsers } from './seeders/user.seeder';

async function runSeeds() {
  await AppDataSource.initialize();
  await seedUsers();
  await AppDataSource.destroy();
}

void runSeeds();
