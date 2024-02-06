import {Router} from 'express';
import {productController} from '../controllers/product.controller';
import { validate } from '../middleware/validate.middleware';

class ProductRoute{
    public route
    constructor(){
        this.route=Router();
        this.route.get('/:id',productController.getProductById);
        this.route.post('/',validate.validateProductData, productController.addProduct);
        // this.route.delete('/:id',productController.deletProductById)
    }
}

export const productRoute = new ProductRoute().route;