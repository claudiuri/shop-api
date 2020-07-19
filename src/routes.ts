import express from 'express';

import ProductController from './controllers/ProductController';
import CreditCardController from './controllers/CreditCardController';
import ClientController from './controllers/ClientController';
import TransactionController from './controllers/TransactionController';

const routes = express.Router();

// Products
routes.post('/products', ProductController.store);
routes.get('/products', ProductController.findAll);
routes.get('/products/:id', ProductController.findById);
routes.delete('/products/:id', ProductController.delete);
routes.put('/products/:id', ProductController.update);

// Clients
routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.findAll);
routes.get('/clients/:id', ClientController.findById);
routes.get('/clients/:id/creditcards', ClientController.findCreditCards);
routes.delete('/clients/:id', ClientController.delete);
routes.put('/clients/:id', ClientController.update);

// CreditCards
routes.post('/creditcards', CreditCardController.store);
routes.get('/creditcards', CreditCardController.findAll);
routes.get('/creditcards/:id', CreditCardController.findById);
routes.delete('/creditcards', CreditCardController.delete);

// Transactions
routes.post('/transactions', TransactionController.store);
routes.get('/transactions', TransactionController.findAll);
routes.get('/transactions/:id', TransactionController.findById);

export default routes;