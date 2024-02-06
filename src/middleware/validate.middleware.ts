import { NextFunction, Request, Response } from "express";

export class validate {
  static validateProductData(req: Request, res: Response, next: NextFunction) {
    const { name, price, quantity } = req.body;
    if (
      typeof name === "string" &&
      typeof price === "number" &&
      typeof quantity === "number"
    ) {
      next();
    } else {
      res.sendStatus(400);
    }
  }
}
