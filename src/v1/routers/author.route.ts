
import { Router } from 'express'
import  authorController from '../controllers/author.controller'

const authorRoutes = Router()

authorRoutes.post('/', authorController.create)
authorRoutes.get('/:id', authorController.getAuthorById)
authorRoutes.put('/:id', authorController.updateAuthorById)
authorRoutes.delete('/:id', authorController.deleteAuthorById)
authorRoutes.get('/', authorController.getAllAuthors)


export default authorRoutes;