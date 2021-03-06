import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

export interface ICreditCard {
	id?: number;
	number: string;
	holderName: string;
	value: number;
	cvv: number;
	expDate: string;
	clientId: number;
}

export class CreditCard extends Model{
	public id?: number;
	public number!: string;
	public holderName!: string;
	public value?: number;
	public cvv!: string;
	public expDate!: string;
	public clientId!: number;

	static prepareInit(sequelize: Sequelize) {
 
		this.init(
			{
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
				client_id: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
			},
			{
				tableName: 'creditCards',
				timestamps: false,
				sequelize
			}
		);
	}

	static associate(models: any) {
		this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client'})
		this.hasMany(models.Transaction,  { foreignKey: 'creditCard_id', as: 'transactions' })
	}
}