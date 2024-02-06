"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = exports.pool = void 0;
const pg_1 = require("pg");
function connectToDB() {
    exports.pool = new pg_1.Pool({
        user: process.env.DB_USERNAME,
        host: "localhost",
        database: "NodeJS",
        password: "admin",
        port: 5432,
    });
}
exports.connectToDB = connectToDB;
