import mongoose, { ConnectOptions, Mongoose } from "mongoose";
import config from "../config/config";

class Database {
    private _mongoose: Mongoose;
    private _configuration: ConnectOptions;
    private _db_uri: string;

    constructor() {
        this._mongoose = mongoose;
        this._configuration = {
            useNewUrlParser: true,
        };
        this._db_uri = config.DB_URI;
    }

    public async Connection(): Promise<void> {
        let r = 5;
        while (r) {
            try {
                await this._mongoose.connect(this._db_uri, this._configuration);
                console.log("DB is connected");
                break;
            } catch (e) {
                console.log(e);
                r--;
                console.log("Retries left:", r);
                await new Promise((res) => setTimeout(res, 5000));
            }
        }
    }
}

export default Database;
