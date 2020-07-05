import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

export interface IProduct {
	id?: number;
	title: string;
	zipcode: string;
	seller: string;
	thumbnailHd: string;
	date: string;
	price: number;
}

export class Product extends Model{
	public id?: number;
	public title!: string;
	public zipcode!: string;
	public seller!: string;
	public thumbnailHd!: string;
	public date!: string;
	public price!: number;

	static prepareInit(sequelize: Sequelize) {

		this.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
					allowNull: false,
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
			},
			{
				tableName: 'products',
				timestamps: false,
				sequelize
			}
		);
	}
}