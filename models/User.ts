import * as db from "./";
import {
  DataTypes,
  Model,
  Optional
} from 'sequelize';

interface UserAttributes {
	id: number;
	account: string;
	nick: string;
	password: string;
	gold: number;
	medal: number;
	avatar: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'gold' | 'medal'> {}

export class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes {
	public id!: number;
	public account!: string;
	public nick!: string;
	public password!: string;
	public gold!: number;
	public medal!: number;
	public avatar!: string;
};

User.init({
	id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
	account:{type: DataTypes.STRING(32),unique:true},
	nick:{type: DataTypes.STRING(32),unique:true},
	password:{type: DataTypes.STRING(32)},
	gold:{type: DataTypes.BIGINT,defaultValue:1000,allowNull:false},
	medal:{type: DataTypes.INTEGER,defaultValue:10,allowNull:false},
	avatar:{type: DataTypes.STRING(128)},
}, {
    sequelize:db.sequelize,
	updatedAt:false,
    tableName: "User"
});