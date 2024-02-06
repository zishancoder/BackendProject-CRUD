"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = require("./src/routes/product.routes");
const connect_1 = require("./src/db/connect");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, connect_1.connectToDB)();
app.use(express_1.default.json());
app.use("/api/product", product_routes_1.productRoute);
app.listen(process.env.PORT, () => {
    console.log("server running");
    console.log(process.env.PORT);
});
