"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.authUseCase = exports.authMysqlRepository = void 0;
const authUseCase_1 = require("../application/authUseCase");
const authMysqlRepository_1 = require("./authMysqlRepository");
const authController_1 = require("./controllers/authController");
exports.authMysqlRepository = new authMysqlRepository_1.AuthMysqlRepository();
exports.authUseCase = new authUseCase_1.AuthUseCase(exports.authMysqlRepository);
exports.authController = new authController_1.AuthController(exports.authUseCase);
