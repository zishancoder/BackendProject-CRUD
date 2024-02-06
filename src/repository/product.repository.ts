import { pool } from "../db/connect";


class ProductRepository{
    getProductById(id:number){
        return pool.query('select name,price,quantity from product where id=$1',[id]);
    }

    addProduct(name:string,price:number,quantity:number){
        return pool.query('insert into product(name,price,quantity) values($1,$2,$3)',[name,price,quantity]);
    }
}

export const productRepository = new ProductRepository();