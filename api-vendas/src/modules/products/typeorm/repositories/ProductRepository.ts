import { EntityRepository, Repository } from 'typeorm';

import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  //Todo tipo asincrono tem que ter uma pormise
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
