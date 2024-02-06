import { QueryResultRow } from "pg";
import { productRepository } from "../repository/product.repository";

class ProductServices{
    async getProductById(id:number){
        return productRepository.getProductById(id);
    }

    async addProduct(name:string,price:number,quantity:number){
        return productRepository.addProduct(name,price,quantity);
    }
}

export const productServices = new ProductServices();