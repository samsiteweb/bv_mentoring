
import { Router } from 'express'
import  bookController from '../controllers/book.controller'

const bookRoutes = Router()

bookRoutes.post('/book/addBook', bookController.create)
bookRoutes.get('/book/getById/:id', bookController.getBookById)
bookRoutes.get('/book/all', bookController.getAllBooks)


export default bookRoutes;