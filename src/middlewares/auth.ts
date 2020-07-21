import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default function(req: Request, res: Response, next: NextFunction){

  const token = req.header('x-auth-token');

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.'});

  try {
    const decoded = verify(token, 'shopApiKey');
    req.user = decoded; 
    next();
  }
  catch (ex) {
    res.status(400).json({ message: 'Invalid token.'});
  }
}