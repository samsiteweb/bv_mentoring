import express, { Response, Request } from 'express';
import bookRoutes from './v1/routers/book.route'
import { default as v2bookRoutes } from './v2/routers/book.route'

const port = 6005;
const app = express();
app.use(express.json())


app.get('/', (req:Request, res:Response) => {
    res.status(200).json("You are welcome to my Bookstore Api. Cheers!")
})

app.use('/api/v1', bookRoutes)
app.use('/api/v2', v2bookRoutes)

app.listen(port, () => console.log("My server is running on port " + port))