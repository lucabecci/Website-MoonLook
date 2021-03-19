import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

class App {
    private _app: Application;
    constructor() {
        this._app = express();

        this.initConfig();
        this.initRoutes();
    }
    private initConfig(): void {
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(express.json());
        this._app.use(
            cors({
                credentials: true,
                origin: "http:localhost:3000",
            })
        );
        this._app.use(morgan("dev"));
    }
    private initRoutes(): void {
        this._app.get("/", (req: Request, res: Response) => {
            console.log(req.ip);
            res.send("Index of the moonlook API");
        });
    }

    public run(): void {
        this._app.listen(4000, () => {
            console.log("Server on port:", 4000);
        });
    }
}

export default App;
