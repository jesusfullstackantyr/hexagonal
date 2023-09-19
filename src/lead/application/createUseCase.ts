import { Lead } from "../domain/lead";
import { LeadRepository } from "../domain/leadRepository";

export class CreateLeadUseCase {
    constructor(readonly leadRepository:LeadRepository){}

    async run(
        name:string,
        lastName:string,
        tutor:string,
        phone:string
    ):Promise<Lead|null>{
        try {
            const createdLead = await this.leadRepository.createLead(
                name,
                lastName,
                tutor,
                phone
            );
            return createdLead;
        }catch(error) {
            return null;
        }
    }
}