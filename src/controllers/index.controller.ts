import { Request, Response } from "express";

function homeIndex(req: Request, res: Response): Response {
    return res.json("Welcome to the API")
}

export default homeIndex;