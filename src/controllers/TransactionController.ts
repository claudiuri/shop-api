import { Request, Response } from 'express'

import { Transaction } from '../models/Transaction';

class TransactionController {

  async store(req: Request, res: Response) {

    const transaction = await Transaction.create(req.body);

    return res.json(transaction)
  }

  async findAll(req: Request, res: Response) {
    
    const { clientid } = req.query;

    const where = clientid ? { where: { cliente_id: clientid } } : {};

    const transactions = await Transaction.findAll(where)

    return res.json(transactions)
  }

  async findById(req: Request, res: Response) {
    
    const { id } = req.params;

    const transaction = await Transaction.findByPk(id);

    return res.json(transaction)
  }
}

export default new TransactionController;