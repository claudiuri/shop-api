import { QueryInterface, DataTypes } from 'sequelize'

export async function up(query: QueryInterface) {
  try {
    return query.createTable('credit_card', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      holderName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cvv: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    return query.dropTable('credit_card');
  } catch (e) {
    return Promise.reject(e);
  }
}