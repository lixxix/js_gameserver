import * as db from "./";
import {
  DataTypes,
  Model,
  Optional
} from 'sequelize';

interface AnswerAttributes {
	id: number;
	type: number;
	hard: number;
	question: string;
	anwser: number;
	selection: string;
}

interface AnswerCreationAttributes extends Optional<AnswerAttributes, 'id' | 'type' | 'hard' | 'anwser'> {}

export class Answer extends Model<AnswerAttributes,AnswerCreationAttributes> implements AnswerAttributes {
	public id!: number;
	public type!: number;
	public hard!: number;
	public question!: string;
	public anwser!: number;
	public selection!: string;
};
Answer.init({
	id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
	type:{type: DataTypes.INTEGER,defaultValue:1},
	hard:{type: DataTypes.INTEGER,defaultValue:1},
	question:{type: DataTypes.STRING(256)},
	anwser:{type: DataTypes.INTEGER,defaultValue:0},
	selection:{type: DataTypes.STRING(256)},
}, {
    sequelize:db.sequelize,
	timestamps:false,
    tableName: "Answer"
});
