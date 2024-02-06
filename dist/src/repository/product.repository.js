"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const connect_1 = require("../db/connect");
class ProductRepository {
    getProductById(id) {
        return connect_1.pool.query('select name,price,quantity from product where id=$1', [id]);
    }
    addProduct(name, price, quantity) {
        return connect_1.pool.query('insert into product(name,price,quantity) values($1,$2,$3)', [name, price, quantity]);
    }
}
exports.productRepository = new ProductRepository();
