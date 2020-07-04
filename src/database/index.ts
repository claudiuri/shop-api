import { Sequelize } from 'sequelize';
// import dbConfig from '../config/database';

import { Product } from '../models/Product';

const connection = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: '1234567',
	database: 'shop'
});

Product.prepareInit(connection);

export default connection;



