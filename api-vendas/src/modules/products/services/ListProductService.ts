import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import Product from '../typeorm/entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    // Metodo get custom para buscar os dados do repositorio customizado que criamos
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find();

    return products;
  }
}

export default ListProductService;
