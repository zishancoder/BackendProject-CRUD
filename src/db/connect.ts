import { Pool } from "pg";

export let pool: Pool;

export function connectToDB() {
  pool = new Pool({
    user: process.env.DB_USERNAME,
    host: "localhost",
    database: "NodeJS",
    password: "admin",
    port: 5432,
  });
}