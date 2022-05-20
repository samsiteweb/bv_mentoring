
import { Router } from 'express'
import  bookController from '../controllers/book.controller'

const bookRoutes = Router()

bookRoutes.post('/book/addBook', bookController.create)
bookRoutes.get('/book/addBook', bookController.getBookById)


export default bookRoutes;