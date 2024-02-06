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
exports.productServices = void 0;
const product_repository_1 = require("../repository/product.repository");
class ProductServices {
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_repository_1.productRepository.getProductById(id);
        });
    }
    addProduct(name, price, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            return product_repository_1.productRepository.addProduct(name, price, quantity);
        });
    }
}
exports.productServices = new ProductServices();
