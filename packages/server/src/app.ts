import express, { Application, IRouter, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/config";
import Database from "./database/database";
import ContactRouter from "./routes/contact.routes";
class App {
    private _app: Application;
    private _database: Database;
    private _contactRouter: IRouter;
    constructor() {
        this._app = express();
        this._database = new Database(config.DB_URI);

        this._contactRouter = ContactRouter;

        this.initDatabase();
        this.initConfig();
        this.initRoutes();
    }
    private async initDatabase(): Promise<void> {
        await this._database.Connection();
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
        this._app.use(morgan(config.STATUS));
    }
    private initRoutes(): void {
        this._app.get("/", (req: Request, res: Response) => {
            console.log(req.ip);
            res.send(
                "Index of the moonlookhttps://github.com/MoonLookOK/Website-MoonLook API"
            );
        });
        this._app.use("/contact", this._contactRouter);
    }

    public run(): void {
        this._app.listen(config.PORT, () => {
            console.log("Server on port:", config.PORT);
        });
    }
}

export default App;
