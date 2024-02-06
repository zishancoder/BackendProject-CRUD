import { Request, Response } from "express";
import { productServices } from "../services/product.services";

interface IAddProduct{
  name:string,
  price:number,
  quantity:number
}

class ProductController {

  async getProductById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const result = await productServices.getProductById(id);
      if(result.rowCount){
        res.status(200).send(result.rows);
      }else{
        res.status(404).send(`product with id ${id} not found!`);
      }
    } catch (error) {
      res.status(400).send('Invalid Request');
    }
  }

  async addProduct(req: Request, res: Response){
      const {name,price,quantity}:IAddProduct = req.body;
      try {
        await productServices.addProduct(name,price,quantity);
        res.status(200).send('Product added Successfully');
      } catch (error) {
        res.status(500).json(error);
      }
  }

  async deleteProductById(req:Request,res:Response){
    
  }

}

export const productController = new ProductController();
