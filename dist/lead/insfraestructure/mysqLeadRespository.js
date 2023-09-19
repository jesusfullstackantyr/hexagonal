"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlLeadRepository = void 0;
const mysql_1 = require("../../database/mysql");
const lead_1 = require("../domain/lead");
class MysqlLeadRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM leads";
            try {
                const [data] = yield (0, mysql_1.query)(sql, []);
                const dataLeads = Object.values(JSON.parse(JSON.stringify(data)));
                return dataLeads.map((lead) => new lead_1.Lead(lead.id, lead.name, lead.last_name, lead.tutor, lead.phone));
            }
            catch (error) {
                //TODO: IMPLEMENTS RESPONSE WITH ERRORS
                return null;
            }
        });
    }
    getById(leadId) {
        throw new Error("Method not implemented.");
    }
    createLead(name, lastName, tutor, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO leads (name,last_name,tutor,phone) VALUES(?,?,?,?)";
                const params = [name, lastName, tutor, phone];
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new lead_1.Lead(result.insertId, name, lastName, tutor, phone);
            }
            catch (error) {
                return null;
            }
        });
    }
    updateLead(leadId, lead) {
        throw new Error("Method not implemented.");
    }
    deleteLead(leadId) {
        throw new Error("Method not implemented.");
    }
}
exports.MysqlLeadRepository = MysqlLeadRepository;
