import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productController = new ProductsController();

productsRouter.get('/', productController.index);

productsRouter.get('/:idProduct', productController.show);

productsRouter.post('/', productController.create);

productsRouter.put('/:idProduct', productController.update);

productsRouter.delete('/:idProduct', productController.delete);

export default productsRouter;
