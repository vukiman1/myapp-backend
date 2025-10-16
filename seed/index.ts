import { AppDataSource } from '../ormconfigs';
import { seedUsers } from './seeders/user.seeder';

async function runSeeds() {
  try {
    await AppDataSource.initialize();
    console.log('🔗 Database connected');

    // Chạy seeders theo thứ tự (parent trước, child sau)
    await seedUsers();

    console.log('✅ All seeds completed successfully');
    await AppDataSource.destroy();
  } catch (error) {
    console.error('❌ Error running seeds:', error);
    process.exit(1);
  }
}

void runSeeds();
