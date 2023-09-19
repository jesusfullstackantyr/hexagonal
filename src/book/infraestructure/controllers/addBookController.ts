import { Request, Response } from "express";
import { AddBookUseCase } from "../../application/addBookUseCase";

export class AddBookController{

    constructor(readonly addBookUseCase: AddBookUseCase) {}

    async run(req:Request,res:Response) {
        try {

            let {title} = req.body;

            let createdBook = await this.addBookUseCase.run(title);

            if (createdBook) {
                return res.status(201).send({
                    status:"success",
                    data:{
                        id:createdBook.id,
                        title:createdBook.title
                    },
                    message:"El libro ha sido creado exitosamente"
                });
            }

            res.status(400).send({
                status:"error",
                data:[],
                //TODO: implementar validaciones
                validations:[],
                message:"Error al crear un libro nuevo, intentalo mas tarde"
            });
        }catch(error) {
            return null;
        }
    }

}