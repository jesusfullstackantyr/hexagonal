"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLeadController = exports.createLeadCaseUse = exports.mysqlLeadRepository = void 0;
const createUseCase_1 = require("../application/createUseCase");
const mysqlLeadRepository_1 = require("./mysqlLeadRepository");
const CreateLeadController_1 = require("./controllers/CreateLeadController");
exports.mysqlLeadRepository = new mysqlLeadRepository_1.MysqlLeadRepository();
exports.createLeadCaseUse = new createUseCase_1.CreateLeadUseCase(exports.mysqlLeadRepository);
exports.createLeadController = new CreateLeadController_1.CreateLeadController(exports.createLeadCaseUse);
