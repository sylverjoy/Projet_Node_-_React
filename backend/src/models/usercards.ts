import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/database'; 
import { Card } from './card';

export class UserCard extends Model {
  public id!: number;
  public confidenceLevel!: string;
  public numberOfTimesReviewed!: number;
  public lastReviewedDate: string | undefined;

  static associate(models: any) {
    UserCard.belongsTo(models.Card);
}

}

UserCard.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  lastReviewedDate: {
    type: DataTypes.DATE,
    allowNull:true,
  },
  confidenceLevel: {
    type: DataTypes.ENUM('Again','Hard','Good','Easy'),
    allowNull: false,
    defaultValue: 'Again',
  },
  numberOfTimesReviewed: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  tableName: 'usercard',
  sequelize: sequelize, 
});


