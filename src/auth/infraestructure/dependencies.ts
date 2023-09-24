import { AuthUseCase } from "../application/use-cases/authUseCase";
import { AuthController } from "./controllers/authController";
import { MysqlOrmRepository } from "./mysqlOrmRepository";


export const mysqlOrmRepository = new MysqlOrmRepository();

export const authUseCase = new AuthUseCase(mysqlOrmRepository);
export const authController = new AuthController(authUseCase);
