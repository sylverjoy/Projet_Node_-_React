import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database'; // Ajustez le chemin selon votre structure
import { Card } from './card';

export class Deck extends Model {
  public id!: number;
  public name!: string;
  // autres champs selon vos besoins
}

Deck.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: 'decks',
  sequelize: sequelize, // passing the `sequelize` instance is required
});

// Relations
Deck.hasMany(Card);
Card.belongsTo(Deck);
