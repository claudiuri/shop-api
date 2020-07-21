import { Model, Sequelize, DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export class User extends Model {
  public id: number = 0;
  public name!: string;
  public email!: string;
  public password!: string;
  public isAdmin: boolean = false;

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
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        isAdmin: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        }
      },
      {
        tableName: 'users',
        timestamps: false,
        sequelize
      }
    );
  }

  static associate(models: any) {
   
  }

  static generateAuthToken(userId: number, isAdmin: boolean): string {
    return jwt.sign({ userId, isAdmin }, 'shopApiKey');
  }
}