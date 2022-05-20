import { Response, Request } from 'express';
import { BookI } from '../../shared/interfaces/book.interface'
import BookRepository from '../repositories/book.repository';

const bookController = {

    create: (req:Request, res:Response) =>{
        let payload = req.body;
        let createBook = new BookRepository();
        let result = createBook.create(payload)
        return res.status(200).json(result)
    },
    
    getBookById: (req:Request, res:Response) => {
        let id = req.params.id;
        let book:BookRepository = new BookRepository();

        let result: BookI = book.getBookById(id)

        return res.status(200).json(result)
    }

}

export default bookController;