import express from 'express';
import auth from './middlewares/auth';

import ProductController from './controllers/ProductController';
import CreditCardController from './controllers/CreditCardController';
import ClientController from './controllers/ClientController';
import TransactionController from './controllers/TransactionController';
import UserController from './controllers/UserController';

const routes = express.Router();

// Products
routes.post('/products', auth, ProductController.store);
routes.get('/products', ProductController.findAll);
routes.get('/products/:id', ProductController.findById);
routes.delete('/products/:id', auth, ProductController.delete);
routes.put('/products/:id', auth, ProductController.update);

// Clients
routes.post('/clients', auth, ClientController.store);
routes.get('/clients', auth, ClientController.findAll);
routes.get('/clients/:id', auth, ClientController.findById);
routes.get('/clients/:id/creditcards', auth, ClientController.findCreditCards);
routes.delete('/clients/:id', auth, ClientController.delete);
routes.put('/clients/:id', auth, ClientController.update);

// CreditCards
routes.post('/creditcards', auth, CreditCardController.store);
routes.get('/creditcards', auth, CreditCardController.findAll);
routes.get('/creditcards/:id', auth, CreditCardController.findById);
routes.delete('/creditcards', auth, CreditCardController.delete);

// Transactions
routes.post('/transactions', auth, TransactionController.store);
routes.get('/transactions', auth, TransactionController.findAll);
routes.get('/transactions/:id', auth, TransactionController.findById);

// Users
routes.post('/users', auth, UserController.store);
routes.post('/users/login', UserController.login);
routes.get('/users', auth, UserController.findAll);
routes.get('/users/:id', auth, UserController.findById);
routes.delete('/users/:id', auth, UserController.delete);
routes.put('/users/:id', auth, UserController.update);

export default routes;