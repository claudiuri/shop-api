import { QueryInterface, DataTypes } from 'sequelize'


export async function up(query: QueryInterface) {
  try {
    return query.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seller: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumbnailHd: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    return query.dropTable('products');
  } catch (e) {
    return Promise.reject(e);
  }
}
