import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(
        title:string
    ):Promise<Book|null> {
        try {
            const createdBook = await this.bookRepository.addBook(title);
            return createdBook;
        }catch(error) {
            return null;
        }
    }
}