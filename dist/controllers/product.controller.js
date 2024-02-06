"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_services_1 = require("../services/product.services");
class ProductController {
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const result = yield product_services_1.productServices.getProductById(id);
                if (result.rowCount) {
                    res.status(200).send(result.rows);
                }
                else {
                    res.status(404).send(`product with id ${id} not found!`);
                }
            }
            catch (error) {
                res.status(400).send('Invalid Request');
            }
        });
    }
    addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, quantity } = req.body;
            try {
                yield product_services_1.productServices.addProduct(name, price, quantity);
                res.status(200).send('Product added Successfully');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    deleteProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.productController = new ProductController();
