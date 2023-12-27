import { Sequelize } from 'sequelize';

// Paramètres de connexion à la base de données
const dbName = process.env.DB_NAME || 'mydb';
const dbUser = process.env.DB_USER || 'user';
const dbPass = process.env.DB_PASS || 'password';
const dbHost = process.env.DB_HOST || 'localhost';

// Création de l'instance Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'postgres',  // Utiliser le dialecte PostgreSQL
  logging: false,       // Désactiver la journalisation pour une sortie plus propre
  // Autres options de configuration selon les besoins
});

export { sequelize };
