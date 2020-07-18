import { Request, Response } from 'express'

import { Client } from '../models/Client';

class ClientController {

  async store(req: Request, res: Response) {

    const client = await Client.create(req.body)

    return res.json(client)
  }

  async findAll(req: Request, res: Response) {

    const clients = await Client.findAll()

    return res.json(clients)
  }

  async findById(req: Request, res: Response) {

    const { id } = req.params;

    const client = await Client.findByPk(id)

    return res.json(client)
  }

  async findCreditCards(req: Request, res: Response) {

    const { id } = req.params;

    const client = await Client.findByPk(id, {
      include: { association: 'creditCards' }
    });

    return res.json(client)
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params;

    const wasDestroyed = await Client.destroy({ where: { id }});

    if (wasDestroyed === 1) {
      return res.json({ message: 'Deleted' });
    } else {
      return res.status(400).json({ message: 'Error while removing' });
    }
  }

  async update(req: Request, res: Response) {

    const { id } = req.params;

    const [numberOfAffectedRows, affectedRows] = await Client.update(req.body, 
      { 
        where: { id },
        returning: true, 
      });

    return res.json(affectedRows[0])
  }
}

export default new ClientController;