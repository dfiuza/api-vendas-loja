import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import Product from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppErrors';

interface IRequest {
  idProduct: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  categoryId: number;
}

class UpdateProductService {
  public async execute({
    idProduct,
    name,
    price,
    quantity,
    description,
    categoryId,
  }: IRequest): Promise<Product> {
    // Metodo get custom para buscar os dados do repositorio customizado que criamos
    const productsRepository = getCustomRepository(ProductRepository);

    //Verifica se no banco por isso precisamos passar o await, pelo tempo de resposta
    const product = await productsRepository.findOne(idProduct);

    if (!product) {
      throw new AppError('Product not found');
    }

    //verificando se existe o produto com mesmo nome
    const productExists = await productsRepository.findByName(name);

    if (productExists && name != product.name) {
      throw new AppError('There is already one product eith this name');
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;
    product.description = description;
    product.categoryId = categoryId;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
