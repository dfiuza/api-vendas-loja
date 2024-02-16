import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import AppError from '@shared/errors/AppErrors';

interface IRequest {
  idProduct: string;
}

class DeleteProductService {
  public async execute({ idProduct }: IRequest): Promise<void> {
    // Metodo get custom para buscar os dados do repositorio customizado que criamos
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(idProduct);

    if (!product) {
      throw new AppError('Product not found');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
