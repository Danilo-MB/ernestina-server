import { Request, Response } from "express";
import { connect } from "../database";
import { Product } from "../interfaces";

export async function getProducts(req: Request, res: Response): Promise<Response> {
    const connection = await connect();
    const categories = await connection.query("SELECT * FROM products");
    return res.json(categories[0]);
}

export async function createProduct(req: Request, res: Response): Promise<Response> {
    const newProduct: Product = req.body;
    const connection = await connect();
    try {
        await connection.query("INSERT INTO products SET ?", [{
            product_category: newProduct.category,
            product_title: newProduct.title,
            product_description: newProduct.description,
            product_imageUrl: newProduct.imageUrl
        }]);
        return res.json({
            message: "Producto creado"
        });
    }
    catch (e) {
        console.log(e, "error");
        res.statusCode = 500;
        return res.json(e);
    }
}

