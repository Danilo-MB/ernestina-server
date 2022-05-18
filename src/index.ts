import { App } from "./app";

async function main() {
    const app = new App(3001);
    app.listen();
}

main();