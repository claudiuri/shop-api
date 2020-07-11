import { Sequelize } from 'sequelize';

import { Product } from '../models/Product';
import { CreditCard } from '../models/CreditCard';
import { Client } from '../models/Client';

const connection = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1234567',
  database: 'shop',
  define: {
    timestamps: false,
  },
});

Product.prepareInit(connection);
CreditCard.prepareInit(connection);
Client.prepareInit(connection);

CreditCard.associate(connection.models)
Client.associate(connection.models)

export default connection;



