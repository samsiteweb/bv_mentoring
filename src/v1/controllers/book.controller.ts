import { Response, Request } from 'express';
import { BookI } from '../../shared/interfaces/book.interface'
import BookRepository from '../repositories/book.repository';

const bookController = {

    create: async (req:Request, res:Response) =>{
        let payload = req.body;
        let createBook = new BookRepository();
        let result = await createBook.create(payload)
        return res.status(200).json(result)
    },

    getAllBooks: async (req:Request, res:Response) =>{
        let getBooks = new BookRepository();
        return res.status(200).json(await getBooks.getAllBooks()) 
    },
    
    getBookById: async (req:Request, res:Response) => {
        let id = req.params.id;
        let book:BookRepository = new BookRepository();

        let result: BookI = await book.getBookById(Number(id))

        return res.status(200).json(result)
    }

}

export default bookController;