import { Lead } from "../domain/lead";
import { LeadRepository } from "../domain/leadRepository";

export class MongoLeadRepository implements LeadRepository {
    getAll(): Promise<Lead[] | null> {
        throw new Error("Method not implemented.");
    }
    getById(leadId: number): Promise<Lead | null> {
        throw new Error("Method not implemented.");
    }
    createLead(name: string, lastName: string, tutor: string, phone: string): Promise<Lead | null> {
        throw new Error("Method not implemented.");
    }
    updateLead(leadId: number, lead: Lead): Promise<Lead | null> {
        throw new Error("Method not implemented.");
    }
    deleteLead(leadId: number): Promise<null> {
        throw new Error("Method not implemented.");
    }

}