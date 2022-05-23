import { BookI } from '../../shared/interfaces/book.interface'
import { BookEntity }  from '../../shared/entity'

class BookRepository {

    constructor() {}

   async create (book: BookI):Promise<BookI> {
        let payload:BookI = book;
        const newBook = new BookEntity()
        const { name, description, author, isbn } = payload
            newBook.name = name
            newBook.description = description
            newBook.author = author
            newBook.isbn = isbn
            await newBook.save()
            
        return newBook;
    };

   async getAllBooks ():Promise<BookI[]> {
       return await BookEntity.find()
    }

    async getBookById(id: number):Promise<BookI> {{
        return await BookEntity.findOneBy({id: id})
    }

}
}

export default BookRepository;