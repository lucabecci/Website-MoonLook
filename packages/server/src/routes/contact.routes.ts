import { IRouter, Router } from "express";
import ContactController from "../controllers/contact.controller";

class ContactRouter {
    private _router: IRouter
    constructor(){
        this._router = Router();

        this.initRoutes()
    }

    public GetRouter(): IRouter{
        return this._router
    }


    private initRoutes(): void {
        this._router.get('/', ContactController.IndexContact)
        this._router.post('/', ContactController.SaveContact)
    }
}


const router = new ContactRouter().GetRouter();

export default router;

