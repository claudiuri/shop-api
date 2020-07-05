import express from 'express';

import ProductController from './controllers/ProductController';
import CreditCardController from './controllers/CreditCardController';

const routes = express.Router();

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.find);

routes.post('/creditcards', CreditCardController.store);
routes.get('/creditcards', CreditCardController.find);

export default routes;