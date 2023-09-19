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
exports.MysqlBookRepository = void 0;
const mysql_1 = require("../../database/mysql");
const book_1 = require("../domain/book");
class MysqlBookRepository {
    addBook(title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = "INSERT INTO books(title) values(?)";
                const params = [title];
                const [result] = yield (0, mysql_1.query)(sql, params);
                return new book_1.Book(result.insertId, title);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.MysqlBookRepository = MysqlBookRepository;
