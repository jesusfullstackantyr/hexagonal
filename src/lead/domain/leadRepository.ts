import { Lead } from "./lead";

export interface LeadRepository{
    getAll():Promise<Lead[] | null>;
    getById(leadId:number):Promise<Lead | null>; 
    createLead(
        name:string,
        lastName:string,
        tutor:string,
        phone:string
    ):Promise<Lead | null>;
    updateLead(leadId:number,lead:Lead):Promise<Lead|null>;
    deleteLead(leadId:number):Promise<null>;
}