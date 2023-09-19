import { query } from "../../database/mysql";
import { Lead } from "../domain/lead";
import { LeadRepository } from "../domain/leadRepository";

export class MysqlLeadRepository  implements LeadRepository {

    async getAll(): Promise<Lead[] | null> {
        const sql = "SELECT * FROM leads";
        try {
            const [data]:any = await query(sql,[]);
            
            const dataLeads = Object.values(JSON.parse(JSON.stringify(data)));

            return dataLeads.map((lead:any) => 
                new Lead(
                    lead.id,
                    lead.name,
                    lead.last_name,
                    lead.tutor,
                    lead.phone
                )
            );
        }catch(error) {
            //TODO: IMPLEMENTS RESPONSE WITH ERRORS
            return null;    
        }
    }
    getById(leadId: number): Promise<Lead | null> {
        throw new Error("Method not implemented.");
    }
    async createLead(name:string,lastName:string,tutor:string,phone:string): Promise<Lead | null> {
        try {
            const sql = "INSERT INTO leads (name,last_name,tutor,phone) VALUES(?,?,?,?)";
            const params:any[] = [name,lastName,tutor,phone];
            const [result]:any = await query(sql,params);
            
            return new Lead(result.insertId,name,lastName,tutor,phone);
        }catch(error) {
            return null;
        }
    }
    updateLead(leadId: number, lead: Lead): Promise<Lead | null> {
        throw new Error("Method not implemented.");
    }
    deleteLead(leadId: number): Promise<null> {
        throw new Error("Method not implemented.");
    }

}