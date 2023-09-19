import { AuthUseCase } from "../application/authUseCase";
import { AuthMysqlRepository } from "./authMysqlRepository";
import { AuthController } from "./controllers/authController";

export const authMysqlRepository = new AuthMysqlRepository();

export const authUseCase = new AuthUseCase(authMysqlRepository);

export const authController = new AuthController(authUseCase);