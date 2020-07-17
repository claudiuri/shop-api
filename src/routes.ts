import express from 'express';

import ProductController from './controllers/ProductController';
import CreditCardController from './controllers/CreditCardController';
import ClientController from './controllers/ClientController';

const routes = express.Router();

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.findAll);

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.findAll);

routes.post('/creditcards', CreditCardController.store);
routes.get('/creditcards', CreditCardController.findAll);
routes.get('/creditcards/:id', CreditCardController.findById);

export default routes;