import { Book } from "./book";

export interface BookRepository {
    addBook(title:string):Promise<Book|null>;
}