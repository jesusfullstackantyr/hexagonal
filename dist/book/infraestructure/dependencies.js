"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookController = exports.addBookUseCase = exports.mysqlBookRepository = void 0;
const addBookUseCase_1 = require("../application/addBookUseCase");
const mysqlBookRepository_1 = require("./mysqlBookRepository");
const addBookController_1 = require("./controllers/addBookController");
exports.mysqlBookRepository = new mysqlBookRepository_1.MysqlBookRepository();
exports.addBookUseCase = new addBookUseCase_1.AddBookUseCase(exports.mysqlBookRepository);
exports.addBookController = new addBookController_1.AddBookController(exports.addBookUseCase);
