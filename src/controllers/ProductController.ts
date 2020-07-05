import { Request, Response } from 'express'

import { Product } from '../models/Product';

class ProductController {

	async store(req: Request, res: Response){

		const product =	await Product.create(req.body)

		return res.json(product)
	}

	async find(req: Request, res: Response){

		const products =	await Product.findAll()

		return res.json(products)
	}

}

export default  new ProductController;