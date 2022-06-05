import { Response, Request } from 'express';
import { BaseResponse, IdDTO } from '../interfaces/base.interface';
import { updateBookDTO } from '../interfaces/book.interface';
import { BookService } from '../services/bookService';
import { BaseController } from './base.controller';

const bookController = {

    create: async (req:Request, res:Response) =>{
        let payload = req.body;
        let result : BaseResponse = await new BookService().createBook(payload);
        return new BaseController().getResponse(res, result)
    },

    getBookById: async (req:Request, res:Response) => {
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().getBookById(id);
        console.log(result.data)
        return new BaseController().getResponse(res, result)
    },

    getAllBooks: async (req:Request, res:Response) =>{
        let result : BaseResponse = await new BookService().getAllBook();
        return new BaseController().getResponse(res, result) 
    },

    getBookByAuthorId: async (req:Request, res:Response) => {
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().getBookByAuthorId(id);
        return new BaseController().getResponse(res, result)
    },

    updateBookById: async (req:Request, res:Response) => {
        let payload : updateBookDTO = req.body;
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().updateBook(id, payload);
        return new BaseController().getResponse(res, result)
    },

    addAuthorToBook: async (req:Request, res:Response) => {
        let payload : IdDTO = req.body;
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().addAuthorToBook(id, payload.id);
        return new BaseController().getResponse(res, result)
    },

    removeAuthorToBook: async (req:Request, res:Response) => {
        let payload : IdDTO = req.body;
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().removeAuthorToBook(id, payload.id);
        return new BaseController().getResponse(res, result)
    },

    deleteBookById: async (req:Request, res:Response) => {
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new BookService().deleteBook(id);
        return new BaseController().getResponse(res, result)
    }

}

export default bookController;