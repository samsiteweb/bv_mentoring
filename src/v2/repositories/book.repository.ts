import { BookI } from '../../shared/interfaces/book.interface'

let bookStore: BookI[] = []

class BookRepository {

    constructor() {}

    create (book: BookI):BookI {
        let payload:BookI = book;
        bookStore.push(payload)
        return payload
    };

    getBookById(id: string): any {
       return bookStore.find((book:BookI) => book.id === id);
    }

}

export default BookRepository;