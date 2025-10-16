import { faker } from '@faker-js/faker';
import { AppDataSource } from '../../ormconfigs';
import { User } from '../../src/api/user/entities/user.entity';

export async function seedUsers() {
  const userRepository = AppDataSource.getRepository(User);

  // Xóa dữ liệu cũ
  await userRepository.query('TRUNCATE TABLE "users" CASCADE');

  // Tạo dữ liệu seed với faker
  const users = Array.from({ length: 10 }, () => ({
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
  }));

  // Lưu users vào database
  const savedUsers = await userRepository.save(users);

  console.log(`✅ Seeded ${savedUsers.length} users`);
  console.table(savedUsers.map((u) => ({ id: u.id, email: u.email })));

  return savedUsers;
}
