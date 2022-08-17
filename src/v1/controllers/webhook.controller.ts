import { Response, Request } from 'express';
import BookRepository from '../repositories/book.repository';

const webhookController = {

    facebookWebhook: (req:Request, res:Response) =>{
        let payload = req.body;
        console.log(">>>>>>>>>> " + JSON.stringify(payload))
        let createBook = new BookRepository();
        // let result = createBook.create(payload);
        return res.status(200).json("result");
    },

    verifyFacebookWebhook: (req:Request, res:Response) =>{
        let VERIFY_TOKEN = "black"
    
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];
          console.log(challenge)
        if (token === VERIFY_TOKEN) {
            console.log(true)
            return res.send(challenge).status(200);
        }
    
    
    }

}

export default webhookController;