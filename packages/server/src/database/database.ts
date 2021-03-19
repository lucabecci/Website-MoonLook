import mongoose, { ConnectOptions, Mongoose } from "mongoose";

class Database {
    private _mongoose: Mongoose;
    private _configuration: ConnectOptions;
    private _db_uri: string;

    constructor(db_uri: string) {
        this._mongoose = mongoose;
        this._configuration = {
            useNewUrlParser: true,
        };
        this._db_uri = db_uri;
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
