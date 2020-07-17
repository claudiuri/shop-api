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

}

export default new ClientController;