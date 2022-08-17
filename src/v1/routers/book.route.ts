
import { Router } from 'express'
import  bookController from '../controllers/book.controller'

const bookRoutes = Router()

bookRoutes.post('/', bookController.create)
bookRoutes.get('/:id', bookController.getBookById)
bookRoutes.put('/:id', bookController.updateBookById)
bookRoutes.delete('/:id', bookController.deleteBookById)
bookRoutes.get('/', bookController.getAllBooks)
bookRoutes.get('/author/:id', bookController.getBookByAuthorId)
bookRoutes.patch('/:id/author/remove', bookController.removeAuthorToBook)
bookRoutes.patch('/:id/author/add', bookController.addAuthorToBook)


export default bookRoutes;