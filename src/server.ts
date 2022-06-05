import "reflect-metadata"

import express, { Response, Request } from 'express';
import bookRoutes from './v1/routers/book.route';
import webhookRoutes from './v1/routers/webhook.route';
import { AppDataSource } from "./data-source";
import authorRoutes from "./v1/routers/author.route";



AppDataSource.initialize().then(async () => {
    console.log("Database connection established ")
    const port = 3000;
    const app = express();
    app.use(express.json())
    app.get('/', (req:Request, res:Response) => {
        res.status(200).json("You are welcome to my Bookstore Api. Cheers!")
    })
    
    app.use('/api/v1/books', bookRoutes)
    app.use('/api/v1/authors', authorRoutes)
    app.use('/api/v1/bv', webhookRoutes)
    
    
    app.listen(port, () => console.log("My server is running on port " + port))

}).catch(error => 
    console.log("An error occurred while initializing the database connection >>>>> " + error.message))



