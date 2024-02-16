import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowproductService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { idProduct } = request.params;

    //chamando o serviço que cuida especificamente para nós
    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ idProduct });

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity, description, categoryId } = request.body;

    //Instanciar nosso serviço
    const createproduct = new CreateProductService();

    const product = await createproduct.execute({
      name,
      price,
      quantity,
      description,
      categoryId,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity, description, categoryId } = request.body;
    const { idProduct } = request.params;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      idProduct,
      name,
      price,
      quantity,
      description,
      categoryId,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { idProduct } = request.params;

    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute({ idProduct });

    return response.json([]);
  }
}
