"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const validate_middleware_1 = require("../middleware/validate.middleware");
class ProductRoute {
    constructor() {
        this.route = (0, express_1.Router)();
        this.route.get('/:id', product_controller_1.productController.getProductById);
        this.route.post('/', validate_middleware_1.validate.validateProductData, product_controller_1.productController.addProduct);
        // this.route.delete('/:id',productController.deletProductById)
    }
}
exports.productRoute = new ProductRoute().route;
