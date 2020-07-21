import { Request, Response } from 'express'
import { genSalt, hash, compare } from 'bcrypt'

import { User } from '../models/User';

class UserController {

  async store(req: Request, res: Response) {

    const { name, email, password, isAdmin } = req.body;

    let user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ message: 'User already registered.' });
    }

    const salt = await genSalt(10);
    const encryptedPassword = await hash(password, salt);

    user = await User.create(
      { 
        name, 
        email, 
        password: encryptedPassword,
        isAdmin 
      }
    );

    const token = User.generateAuthToken(user.id, user.isAdmin);

    return res.header('x-auth-token', token).json({ id: user.id, name, email });
  }

  async findAll(req: Request, res: Response) {

    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.json(users)
  }

  async findById(req: Request, res: Response) {

    const { id } = req.params;

    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } })

    return res.json(user)
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params;

    const wasDestroyed = await User.destroy({ where: { id }});

    if (wasDestroyed === 1) {
      return res.json({ message: 'Deleted' });
    } else {
      return res.status(400).json({ message: 'Error while removing' });
    }
  }

  async update(req: Request, res: Response) {

    const { id } = req.params;

    const [numberOfAffectedRows, affectedRows] = await User.update(req.body, 
      { 
        where: { id },
        returning: true, 
      });

    return res.json(affectedRows[0])
  }

  async login(req: Request, res: Response) {

    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User is not registered.' });
    }

    const passwordIsValid  = compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).json({ message: 'Password invalid.' });
    }

    const token = User.generateAuthToken(user.id, user.isAdmin);

    return res.header('x-auth-token', token).json({ message: 'User logged.' });
  }
}

export default new UserController;