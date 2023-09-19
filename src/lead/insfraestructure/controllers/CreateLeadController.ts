import { Request, Response } from "express";
import { CreateLeadUseCase } from "../../application/createUseCase";

export class CreateLeadController {
    constructor(readonly createLeadUseCase:CreateLeadUseCase) {}

    async run(req:Request, res:Response) {
        try {
            let {name,last_name,tutor,phone} = req.body;
            const createdLead = await this.createLeadUseCase.run(
                name,
                last_name,
                tutor,
                phone
            );

            if (createdLead) {
                return res.status(201).send({
                    status:"success",
                    data:{
                        id:createdLead.id,
                        full_name:createdLead.name+" "+createdLead.lastName,
                        name:createdLead.name,
                        last_name:createdLead.lastName,
                        tutor:createdLead.tutor,
                        contact_phone:createdLead.phone
                    },
                    message:"El prospecto ha sido creado exitosamente"
                });
            }

            res.status(400).send({
                status:"error",
                data:[],
                //TODO: implementar validaciones
                validations:[],
                message:"Error al crear un cliente prospecto, intentalo mas tarde"
            });
        }catch(error) {
            return null;
        }
    }
}