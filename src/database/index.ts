import { Sequelize } from 'sequelize';

import { Product } from '../models/Product';
import { CreditCard } from '../models/CreditCard';
import { Client } from '../models/Client';
import { Transaction } from '../models/Transaction';
import { User } from '../models/User';

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
Transaction.prepareInit(connection)
Client.prepareInit(connection);
User.prepareInit(connection);

CreditCard.associate(connection.models)
Client.associate(connection.models)
Transaction.associate(connection.models)

export default connection;



