import { Request, Response } from "express";
import { AuthUseCase } from "../../application/authUseCase";

export class AuthController {

    constructor(readonly AuthUseCase:AuthUseCase){}

    async run(req:Request,res:Response) {
        let {email,password} = req.body;
        this.AuthUseCase.run(email,password);
    }

}