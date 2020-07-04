import { Request, Response } from 'express'

import { Product } from '../models/Product';

class ProductController {

	async store(req: Request, res: Response){

		const product =	await Product.create(req.body)

		return res.json(product)
	}

}

export default  new ProductController;