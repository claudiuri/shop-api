import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

export interface IClient {
  id?: number;
  name: string;
}

export class Client extends Model {
  public id?: number;
  public name!: string;

  static prepareInit(sequelize: Sequelize) {

    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        tableName: 'clients',
        timestamps: false,
        sequelize
      }
    );
  }

  static associate(models: any) {
    this.hasMany(models.CreditCard,
      {
        foreignKey: 'client_id',
        as: 'creditCards'
      })
  }
}