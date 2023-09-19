import { CreateLeadUseCase } from "../application/createUseCase";
import { MysqlLeadRepository } from "./mysqlLeadRepository";
import { CreateLeadController } from "./controllers/CreateLeadController";
import { MongoLeadRepository } from "./mongoLeadRepository";

export const mysqlLeadRepository = new MysqlLeadRepository();
export const mongoLeadRepository = new MongoLeadRepository();

export const createLeadCaseUse = new CreateLeadUseCase(mysqlLeadRepository);
export const createLeadController = new CreateLeadController(createLeadCaseUse);

