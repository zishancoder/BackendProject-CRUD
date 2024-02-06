"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
class validate {
    static validateProductData(req, res, next) {
        const { name, price, quantity } = req.body;
        if (typeof name === "string" &&
            typeof price === "number" &&
            typeof quantity === "number") {
            next();
        }
        else {
            res.sendStatus(400);
        }
    }
}
exports.validate = validate;
