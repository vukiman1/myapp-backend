import { faker } from '@faker-js/faker';
import { AppDataSource } from '../../ormconfigs';
import { Products } from '../../src/api/products/entities/products.entities';
import { ProductType } from '@app/enum';
import { DeepPartial } from 'typeorm';

export async function seedProducts() {
  const productRepository = AppDataSource.getRepository(Products);

  await productRepository.query('TRUNCATE TABLE "products" CASCADE');

  const products = Array.from({ length: 10 }, () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: Number(faker.commerce.price()),
    type: ProductType.DISPLAY,
  }));

  const savedProducts = await productRepository.save(
    products as DeepPartial<Products>[],
  );

  console.table(savedProducts.map((p) => ({ id: p.id, title: p.title })));

  return savedProducts;
}
