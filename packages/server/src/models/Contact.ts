import { Document, model, Schema, SchemaDefinition } from "mongoose";

export interface IContact extends Document{
    id?:  string,
    name: string,
    email: string,
    choose: string,
    description: string
}

class ContactSchema {
    private _definition: SchemaDefinition
    private _schema: Schema

    constructor() {
        this._definition = {
            name: {type: String, required: true, trim: true},
            email: {type: String, required: true, trim: true},
            choose: {type: String, required: true, trim: true},
            description: {type: String, required: true, trim: true},
        }

        this._schema = new Schema(this._definition, {
            timestamps: true
        })
    }

    public GetSchema(): Schema{
        return this._schema
    }
}

const contactSchema = new ContactSchema();

export default model<IContact>("Contact", contactSchema.GetSchema())