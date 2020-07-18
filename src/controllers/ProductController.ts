import { Request, Response } from 'express'

import { Product } from '../models/Product';

class ProductController {

	async store(req: Request, res: Response){

		const product =	await Product.create(req.body)

		return res.json(product)
	}

	async findAll(req: Request, res: Response){

		const products =	await Product.findAll()

		return res.json(products)
	}

	async findById(req: Request, res: Response) {
    
    const { id } = req.params;

    const product = await Product.findByPk(id);

    return res.json(product)
	}
	
	async delete(req: Request, res: Response) {
    
    const { id } = req.params;

    const wasDestroyed = await Product.destroy({ where: { id }});

    if (wasDestroyed === 1) {
      return res.json({ message: 'Deleted' });
    } else {
      return res.status(400).json({ message: 'Error while removing' });
    }
	}
	
	async update(req: Request, res: Response) {

    const { id } = req.params;

    const [numberOfAffectedRows, affectedRows] = await Product.update(req.body, 
      { 
        where: { id },
        returning: true, 
      });

    return res.json(affectedRows[0])
  }
}

export default  new ProductController;