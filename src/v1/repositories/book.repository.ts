import { BookI } from '../../shared/interfaces/book.interface'

let bookMap = new Map<string, BookI> ();

class BookRepository {

    constructor() {}

    create (book: BookI):BookI {
        let payload:BookI = book;
        bookMap.set(book.id, payload);
        return payload
    };

    getAllBooks ():BookI[] {
        let book:BookI[] = [];

        for (let value of bookMap.values()) {
            book.push(value);                 
                    
        };

        return book;
    }

    getBookById(id: string): any {
       return bookMap.get(id);
    }

    updateBookById(book: BookI) {
        let foundBook = bookMap.get(book.id);

        if (foundBook) {
            bookMap.set(book.id, book);
            return foundBook;
        }

        return null;
        
     }

     deleteBookById(id: string) : boolean {
        if (!bookMap.get(id)) {
             return false;
        }

        bookMap.delete(id);

        return true;
     }

}

export default BookRepository;