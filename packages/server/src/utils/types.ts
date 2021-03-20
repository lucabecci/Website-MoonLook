import { IContact } from "../models/Contact";

export interface ReturnCreateContact {
    contact: IContact | null;
    success: boolean;
}

export interface RequestCreateContact {
    name: string;
    email: string;
    choose: string;
    description: string;
}
