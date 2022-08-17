
import { Router } from 'express'
import  webhookController from '../controllers/webhook.controller'

const webhookRoutes = Router()

webhookRoutes.post('/webhook', webhookController.facebookWebhook)
webhookRoutes.get('/webhook', webhookController.verifyFacebookWebhook)


export default webhookRoutes;