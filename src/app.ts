import express, { Application } from "express";
import morgan from "morgan";
import homeRoutes from "./routes/index.routes";
import categoriesRoutes from "./routes/categories.routes";
import productsRoutes from "./routes/products.routes";

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set("port", this.port || process.env.PORT || 3001);
    }

    middlewares() {
        this.app.use(morgan("dev"));
    }

    routes() {
        this.app.use(homeRoutes);
        this.app.use("/categories", categoriesRoutes);
        this.app.use("/products", productsRoutes);
    }

    listen() {
        this.app.listen(this.app.get("port"));
        console.log(`Listening on port ${this.port}`)
    }

}