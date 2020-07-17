import { Request, Response } from 'express'

import { CreditCard } from '../models/CreditCard';

class CreditCardController {

  async store(req: Request, res: Response) {

    const { number, holderName, value, cvv, expDate, clientId } = req.body;

    const creditCard = await CreditCard.create({ 
      number, 
      holderName, 
      value,
      cvv, 
      expDate, 
      client_id: clientId 
    });

    return res.json(creditCard)
  }

  async findAll(req: Request, res: Response) {
    
    const { clientid } = req.query;

    const where = clientid ? { where: { cliente_id: clientid } } : {};

    const creditCards = await CreditCard.findAll(where)

    return res.json(creditCards)
  }

  async findById(req: Request, res: Response) {
    
    const { id } = req.params;

    const creditCards = await CreditCard.findByPk(id);

    return res.json(creditCards)
  }

}

export default new CreditCardController;