import { Request, Response } from "express";
import { connect } from "../database";

export async function getProducts(req: Request, res: Response): Promise<Response> {
    const connection = await connect();
    const categories = await connection.query("SELECT * FROM products");
    return res.json(categories[0]);
}