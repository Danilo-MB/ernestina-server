import { createPool } from "mysql2/promise";

export async function connect() {

    const connection = createPool({
        host: "localhost",
        user: "root",
        database: "ernestina",
        connectionLimit: 10,
        password: "admin"
    })
    return connection;
}