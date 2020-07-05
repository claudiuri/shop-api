import { Sequelize } from 'sequelize';

import { Product } from '../models/Product';
import { CreditCard } from '../models/CreditCard';

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234567',
  database: 'shop',
  define: {
    timestamps: false,
  },
});

Product.prepareInit(connection);
CreditCard.prepareInit(connection);

export default connection;



