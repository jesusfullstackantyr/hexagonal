import { query } from "../../database/mysql";
import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class MysqlBookRepository implements BookRepository{
    async addBook(title: string): Promise<Book | null> {
        try {
            let sql = "INSERT INTO books(title) values(?)";
            const params:any[] = [title];
            const [result]:any = await query(sql,params);
            return new Book(result.insertId,title);
        }catch(error) {
            return null;
        }
    }

}