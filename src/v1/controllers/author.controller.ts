import { Response, Request } from 'express';
import { updateAuthorDTO } from '../interfaces/author.interface';
import { BaseResponse } from '../interfaces/base.interface';
import { AuthorService } from '../services/authorService'
import { BaseController } from './base.controller';

const authorController = {

    create: async (req:Request, res:Response) =>{
        let payload = req.body;
        let result : BaseResponse = await new AuthorService().createAuthor(payload);
        return new BaseController().getResponse(res, result)
    },

    getAuthorById: async (req:Request, res:Response) => {
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new AuthorService().getAuthorById(id);
        return new BaseController().getResponse(res, result)
    },

    getAllAuthors: async (req:Request, res:Response) =>{
        let result : BaseResponse = await new AuthorService().getAuthorAll();
        return new BaseController().getResponse(res, result) 
    },

    updateAuthorById: async (req:Request, res:Response) => {
        let payload : updateAuthorDTO = req.body;
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new AuthorService().updateAuthor(id, payload);
        return new BaseController().getResponse(res, result)
    },

    deleteAuthorById: async (req:Request, res:Response) => {
        let id : number = Number(req.params.id);
        let result : BaseResponse = await new AuthorService().deleteAuthor(id);
        return new BaseController().getResponse(res, result)
    }

}

export default authorController;