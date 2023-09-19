import { AddBookUseCase } from "../application/addBookUseCase";
import { MysqlBookRepository } from "./mysqlBookRepository";
import { AddBookController } from "./controllers/addBookController";

export const mysqlBookRepository = new MysqlBookRepository();
export const addBookUseCase      = new AddBookUseCase(mysqlBookRepository);
export const addBookController   = new AddBookController(addBookUseCase);