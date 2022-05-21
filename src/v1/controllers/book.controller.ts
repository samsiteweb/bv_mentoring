import { Response, Request } from 'express';
import { BookI } from '../../shared/interfaces/book.interface'
import BookRepository from '../repositories/book.repository';

const bookController = {

    create: (req:Request, res:Response) =>{
        let payload = req.body;
        let createBook = new BookRepository();
        let result = createBook.create(payload);
        return res.status(200).json(result);
    },

    getAllBooks: (req:Request, res:Response) =>{
        let getBooks = new BookRepository();
        return res.status(200).json(getBooks.getAllBooks()) 
    },
    
    getBookById: (req:Request, res:Response) => {
        let id = req.params.id;
        let book:BookRepository = new BookRepository();

        let result: BookI = book.getBookById(id);
        if (!result) {
            return res.status(400).json("book not found");
        }

        return res.status(200).json(result);
    },

    updateBookById: (req:Request, res:Response) => {
        let id = req.params.id;
        let payload : BookI = req.body;
        payload.id = id;

        let book:BookRepository = new BookRepository();

        let result: BookI | null = book.updateBookById(payload)

        if (result) {
            return res.status(200).json(result);
        }

        return res.status(400).json("Book not found");
    },

    deleteBookById: (req:Request, res:Response) => {
        let id = req.params.id;

        let book:BookRepository = new BookRepository();

        let result: boolean = book.deleteBookById(id);

        if (result) {
            return res.status(200).json("Book deleted successfully");
        }

        return res.status(400).json("Book not found");
    }

}

export default bookController;