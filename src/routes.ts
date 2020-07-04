import express from 'express';

import ProductController from './controllers/ProductController';

const routes = express.Router();

routes.post('/products', ProductController.store);

export default routes;