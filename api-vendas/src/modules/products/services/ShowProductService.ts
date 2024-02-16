import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppErrors';

interface IRequest {
  idProduct: string;
}

class ShowProductService {
  public async execute({ idProduct }: IRequest): Promise<Product> {
    // Metodo get custom para buscar os dados do repositorio customizado que criamos
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(idProduct);

    if (!product) {
      throw new AppError('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
