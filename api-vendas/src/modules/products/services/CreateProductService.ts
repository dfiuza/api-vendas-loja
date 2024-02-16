import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import AppError from '@shared/errors/AppErrors';
import Product from '../typeorm/entities/Product';

// Criei para vereficar oque foi enviado pelo usuario
interface IRequest {
  name: string;
  price: number;
  quantity: number;
  description: string;
  categoryId: number;
}
class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
    description,
    categoryId,
  }: IRequest): Promise<Product> {
    // Metodo get custom para buscar os dados do repositorio customizado que criamos
    const productsRepository = getCustomRepository(ProductRepository);
    //verificando se existe o produto com mesmo nome
    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product eith this name');
    }

    const product = productsRepository.create({
      name,
      price,
      quantity,
      description,
      categoryId,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
