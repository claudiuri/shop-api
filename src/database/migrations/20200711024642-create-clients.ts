import { QueryInterface, DataTypes } from 'sequelize'

export async function up(query: QueryInterface) {
  try {
    return query.createTable('clients', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creditCardId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'credit_card',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    return query.dropTable('clients');

  } catch (e) {
    return Promise.reject(e);
  }
}