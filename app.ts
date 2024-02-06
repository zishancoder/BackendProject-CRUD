import express from "express";
import dotenv from "dotenv";
import { productRoute } from "./src/routes/product.routes";
import { connectToDB } from "./src/db/connect";

dotenv.config()

const app = express();
connectToDB()

app.use(express.json());

app.use("/api/product", productRoute);

app.listen(process.env.PORT, () => {
  console.log("server running");
  console.log(process.env.PORT);
  
});
