import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Ajustez le chemin selon votre structure

export class Card extends Model {
  public id!: number; // Note: le ! indique que ce champ ne sera jamais null.
  public recto!: string;
  public verso!: string;
  public state!: string;
  public weight!: number;
}

Card.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  recto: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  verso: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  state: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  }
}, {
  tableName: 'cards',
  sequelize: sequelize, // passing the `sequelize` instance is required
});
