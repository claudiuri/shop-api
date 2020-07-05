import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

export interface ICreditCard {
	id?: number;
	number: string;
	holderName: string;
	valeu: number;
	cvv: number;
	expDate: string;
}

export class CreditCard extends Model{
	public id?: number;
	public number!: string;
	public holderName!: string;
	public valeu?: number;
	public cvv!: string;
	public expDate!: string;

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
			},
			{
				tableName: 'credit_card',
				timestamps: false,
				sequelize
			}
		);
	}
}