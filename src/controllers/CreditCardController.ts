import { Request, Response } from 'express'

import { CreditCard } from '../models/CreditCard';

class CreditCardController {

	async store(req: Request, res: Response){

		const creditCard =	await CreditCard.create(req.body)

		return res.json(creditCard)
	}

	async find(req: Request, res: Response){

		const creditCards =	await CreditCard.findAll()

		return res.json(creditCards)
	}

}

export default  new CreditCardController;