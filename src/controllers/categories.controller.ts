import { Request, Response } from "express";
import { connect } from "../database";

export async function getCategories(req: Request, res: Response): Promise<Response> {
    const connection = await connect();
    const categories = await connection.query("SELECT * FROM categories");
    return res.json(categories[0]);
}