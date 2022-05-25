import { Request, Response } from "express";
import { connect } from "../database";
import { Product } from "../interfaces";

export async function getProducts(req: Request, res: Response): Promise<Response> {
    const connection = await connect();
    const products = await connection.query("SELECT * FROM products");
    return res.json(products[0]);
}

export async function getProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const connection = await connect();
    const product = await connection.query("SELECT * FROM products WHERE id = ?", Number(id));
    return res.json(product);
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

export async function updateProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const connection = await connect();
    try {
        const product = {
            product_category: req.body.category,
            product_title: req.body.title,
            product_description: req.body.description,
            product_imageUrl: req.body.imageUrl
        };
        await connection.query('UPDATE products set ? WHERE id=?', [product, id])
        return res.json({
            message: "Producto actualizado"
        });
    }
    catch (e) {
        console.log(e, "error");
        res.statusCode = 500;
        return res.json(e);
    }
}

export async function deleteProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const connection = await connect();
    try {
        await connection.query('DELETE FROM products WHERE id=?', Number(id))
        return res.json({
            message: "Producto eliminado"
        });
    }
    catch (e) {
        console.log(e, "error");
        res.statusCode = 500;
        return res.json(e);
    }
}
