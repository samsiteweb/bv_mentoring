import { Book } from '../models/book';


class BookRepository {


    constructor() {}

    public async create(book: Book) : Promise<Book> {
        return await book.save();
    }

    public async getBookByISBN(isbn: string) : Promise<Book> {
        return await Book.findOneBy({
            isbn
        })
    }

}

export default BookRepository;