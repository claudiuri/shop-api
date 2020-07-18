import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

export interface ITransaction {
  id?: number;
  totalToPay: number;
  client_id: number;
  creditCard_id: number;
}

export class Transaction extends Model {
  public id?: number;
  public totalToPay!: number;
  public client_id!: number;
  public creditCard_id!: number;

  static prepareInit(sequelize: Sequelize) {

    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        totalToPay: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        client_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        creditCard_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        tableName: 'transactions',
        timestamps: false,
        sequelize
      }
    );
  }

  static associate(models: any) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.CreditCard, { foreignKey: 'creditCard_id',as: 'creditCard'});
  }
}